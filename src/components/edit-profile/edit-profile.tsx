import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { updatePassword, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { FieldErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { GENDERS } from "@/constants/genders";
import { auth, db } from "@/firebase";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { updateUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { Select } from "@/ui/selects";
import { queryUserEqualByValue, reauthUser } from "@/utils/firebase/helpers";

import ErrorsSummary from "../errors/errors-summary";
import { FormError } from "../errors/form-error";
import { schema } from "./form-schema";
import { StyledFormProfile, Text } from "./styled";

type EditProfileProps = {
  handleModalClose: VoidFunction;
};

type Data = {
  displayName: string;
  gender: string;
  status: string;
  currentPassword: string;
  newPassword: string;
};

export function EditProfile({ handleModalClose }: EditProfileProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(getUserSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      displayName: user.displayName,
      gender: user.gender,
      status: user.status,
      currentPassword: "",
      newPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Data) => {
    try {
      await reauthUser(data.currentPassword);
      const userSnapshot = await queryUserEqualByValue("uid", user.uid);
      const userRef = doc(db, "users", userSnapshot.docs[0].id);

      updateDoc(userRef, {
        displayName: data.displayName,
        gender: data.gender,
        status: data.status,
      });
      updateProfile(auth.currentUser!, {
        displayName: data.displayName,
      });
      data.newPassword &&
        data.currentPassword &&
        updatePassword(auth.currentUser!, data.newPassword);
      dispatch(updateUser(data));
      handleModalClose();
    } catch (error) {
      console.log("error catched");
      if (error instanceof FirebaseError) {
        console.log("error instanceof FirebaseError");
        navigate("/profile");
      }
    }
  };

  return (
    <StyledFormProfile onSubmit={handleSubmit(onSubmit)}>
      <Text>Edit your profile</Text>
      <Input {...register("displayName")} type="text" placeholder="Name" />
      <FormError inputFor={errors.displayName} />
      <Input
        {...register("currentPassword")}
        type="password"
        placeholder="Current password"
      />
      <FormError inputFor={errors.currentPassword} />
      <Input
        {...register("newPassword")}
        type="password"
        placeholder="New password"
      />
      <FormError inputFor={errors.newPassword} />
      <Select {...register("gender")} options={GENDERS} placeholder="Gender" />
      <FormError inputFor={errors.gender} />
      <Input {...register("status")} type="text" placeholder="Status" />
      <FormError inputFor={errors.status} />
      <ErrorsSummary errors={errors as FieldErrors} />
      <Button type="submit" variant="primary" size="large">
        Edit
      </Button>
    </StyledFormProfile>
  );
}
