import { zodResolver } from "@hookform/resolvers/zod";
import { updatePassword, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";

import { GENDERS } from "@/constants/genders";
import { auth, db } from "@/firebase";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { Select } from "@/ui/selects";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

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
      <FormError inputFor={errors.displayName} />
      <Input {...register("password")} type="password" placeholder="Password" />
      <FormError inputFor={errors.password} />
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
