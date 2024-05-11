import { zodResolver } from "@hookform/resolvers/zod";
import { updatePassword, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";

import { GENDERS } from "@/constants/genders";
import { auth, db } from "@/firebase";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { Select } from "@/ui/selects";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { schema } from "./form-schema";
import { StyledFormProfile, Text } from "./styled";

type EditProfileProps = {
  handleModalClose: VoidFunction;
};

type Data = {
  displayName: string;
  gender: string;
  status: string;
  password: string;
};

export function EditProfile({ handleModalClose }: EditProfileProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      displayName: user.displayName,
      gender: user.gender,
      status: user.status,
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Data> = async (data) => {
    const userSnapshot = await queryUserEqualByValue("uid", user.uid);
    const userRef = doc(db, "users", userSnapshot.docs[0].id);

    await Promise.all([
      updateDoc(userRef, {
        displayName: data.displayName,
        gender: data.gender,
        status: data.status,
      }),
      updateProfile(auth.currentUser!, {
        displayName: data.displayName,
      }),
      data.password && updatePassword(auth.currentUser!, data.password),
    ]);

    dispatch(updateUser(data));
    handleModalClose();
  };

  return (
    <StyledFormProfile onSubmit={handleSubmit(onSubmit)}>
      <Text>Edit your profile</Text>
      <Input {...register("displayName")} type="text" placeholder="Name" />
      {errors.displayName && <p>{errors.displayName.message}</p>}
      <Input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
      <Select {...register("gender")} options={GENDERS} placeholder="Gender" />
      {errors.gender && <p>{errors.gender.message}</p>}
      <Input {...register("status")} type="text" placeholder="Status" />
      {errors.status && <p>{errors.status.message}</p>}
      <Button type="submit" $variant="primary" $size="large">
        Edit
      </Button>
    </StyledFormProfile>
  );
}
