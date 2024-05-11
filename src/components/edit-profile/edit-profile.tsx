import { updatePassword, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";

import { GENDERS } from "@/constants/modal-helpers";
import { auth, db } from "@/firebase";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { Select } from "@/ui/selects";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { StyledFormProfile, Text } from "./styled";

type EditProfileProps = {
  handleModalClose: VoidFunction;
};

// TODO: Правки стилей
// TODO: маппер
// TODO: react hook forms
// TODO?: добавлять изображение в окне редактирования профиля

export function EditProfile({ handleModalClose }: EditProfileProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const [formState, setFormState] = useState({
    displayName: user.displayName,
    password: "",
    gender: user.gender,
    status: user.status,
  });

  const handleFormStateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userSnapshot = await queryUserEqualByValue("uid", user.uid);
    const userRef = doc(db, "users", userSnapshot.docs[0].id);

    await Promise.all([
      updateDoc(userRef, {
        displayName: formState.displayName,
        gender: formState.gender,
        status: formState.status,
      }),
      updateProfile(auth.currentUser!, {
        displayName: formState.displayName,
      }),
      updatePassword(auth.currentUser!, formState.password),
    ]);

    dispatch(updateUser(formState));
    handleModalClose();
  };

  return (
    <StyledFormProfile>
      <Text>Edit your profile</Text>
      <Input
        type="text"
        name="displayName"
        placeholder="Name"
        value={formState.displayName}
        onChange={handleFormStateChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formState.password}
        onChange={handleFormStateChange}
      />
      <Select
        placeholder="Gender"
        options={GENDERS}
        name="gender"
        onChange={handleFormStateChange}
      />
      <Input
        type="text"
        name="status"
        placeholder="Status"
        value={formState.status}
        onChange={handleFormStateChange}
      />
      <Button $variant="primary" $size="large" onClick={handleSubmit}>
        Edit
      </Button>
    </StyledFormProfile>
  );
}
