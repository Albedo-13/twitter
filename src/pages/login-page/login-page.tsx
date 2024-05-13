import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import FormError from "@/components/form-error/form-error";
import { Logo } from "@/components/logo/logo";
import { passwordRegex } from "@/constants/regexes";
import { auth } from "@/firebase";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { InlineLink } from "@/ui/links";
import {
  adaptUserObj,
  getLoginFromEmailOrPhone,
  queryUserEqualByValue,
} from "@/utils/firebase/helpers";

import { FormWrapper } from "./styled";

type Data = {
  login: string;
  password: string;
};

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(new RegExp(passwordRegex.regex), passwordRegex.message),
});

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Data> = async (data) => {
    const queryEmailSnapshot = await queryUserEqualByValue("email", data.login);
    const queryPhoneSnapshot = await queryUserEqualByValue("phone", data.login);

    const user = getLoginFromEmailOrPhone(
      queryEmailSnapshot,
      queryPhoneSnapshot
    );

    if (user) {
      Promise.all([
        dispatch(setUser(adaptUserObj(user))),
        await signInWithEmailAndPassword(auth, user.email, data.password),
      ]);
      navigate("/");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <h1>Log in to Twitter</h1>
      <Input
        {...register("login")}
        type="text"
        placeholder="Phone number, email address"
      />
      <FormError inputFor={errors.login} />
      <Input {...register("password")} type="password" placeholder="Password" />
      <FormError inputFor={errors.password} />
      <Button variant="primary" size="large" type="submit">
        Log In
      </Button>
      <InlineLink to="/signup" align="right">
        Sign up to Twitter
      </InlineLink>
    </FormWrapper>
  );
}
