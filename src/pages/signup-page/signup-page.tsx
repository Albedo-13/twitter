import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FormError } from "@/components/errors/form-error";
import { Logo } from "@/components/logo/logo";
import { MONTHS, YEARS } from "@/constants/dates";
import { auth, db } from "@/firebase";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { InlineLink } from "@/ui/links";
import { Select } from "@/ui/selects";
import { getDaysFromMonth } from "@/utils/get-days-from-month";

import { schema } from "./form-schema";
import {
  ButtonWrapper,
  FormWrapper,
  H1,
  H2,
  LogoWrapper,
  SelectWrapper,
  SelectWrapperGrow,
  Text,
} from "./styled";

type Data = {
  displayName: string;
  phone: string;
  email: string;
  password: string;
  year: string;
  month: string;
  day: string;
};

export function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: Data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const userCreds = userCredential.user;

        const newUser = {
          uid: userCreds.uid,
          phone: data.phone,
          email: data.email,
          photoURL: userCreds.photoURL || "",
          displayName: data.displayName,
          birthday: new Date(
            Number(data.year),
            Number(MONTHS.indexOf(data.month)),
            Number(data.day)
          ).toString(),
        };

        Promise.all([
          addDoc(collection(db, "users"), newUser),
          dispatch(setUser(newUser)),
        ]);

        navigate("/");
      })

      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <H1>Create an account</H1>
      <Input {...register("displayName")} type="text" placeholder="Name" />
      <FormError inputFor={errors.displayName} />
      <Input {...register("phone")} type="text" placeholder="Phone number" />
      <FormError inputFor={errors.phone} />
      <Input {...register("email")} type="text" placeholder="Email" />
      <FormError inputFor={errors.email} />
      <Input {...register("password")} type="password" placeholder="Password" />
      <FormError inputFor={errors.password} />
      <InlineLink to="/auth">Use email</InlineLink>
      <H2>Date of birth</H2>
      <Text>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
      </Text>
      <SelectWrapper>
        <SelectWrapperGrow>
          <Select {...register("year")} placeholder="Years" options={YEARS} />
        </SelectWrapperGrow>

        <Select {...register("month")} placeholder="Months" options={MONTHS} />
        <Select
          {...register("day")}
          placeholder="Days"
          options={getDaysFromMonth(
            +watch("year"),
            MONTHS.indexOf(watch("month"))
          )}
        />
      </SelectWrapper>
      <FormError inputFor={errors.year} />
      <FormError inputFor={errors.month} />
      <FormError inputFor={errors.day} />
      <ButtonWrapper>
        <Button type="submit" variant="primary" size="large">
          Next
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
}
