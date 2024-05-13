import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FormError } from "@/components/errors/form-error";
import { Logo } from "@/components/logo/logo";
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
  });

  const onSubmit = async (data: Data) => {
    const queryEmailSnapshot = await queryUserEqualByValue("email", data.login);
    const queryPhoneSnapshot = await queryUserEqualByValue("phone", data.login);

    const user = getLoginFromEmailOrPhone(
      queryEmailSnapshot,
      queryPhoneSnapshot
    );
    console.log(user);

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
