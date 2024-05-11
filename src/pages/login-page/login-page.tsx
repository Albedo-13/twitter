import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const queryEmailSnapshot = await queryUserEqualByValue("email", login);
    const queryPhoneSnapshot = await queryUserEqualByValue("phone", login);

    const user = getLoginFromEmailOrPhone(
      queryEmailSnapshot,
      queryPhoneSnapshot
    );

    if (user) {
      Promise.all([
        dispatch(setUser(adaptUserObj(user))),
        await signInWithEmailAndPassword(auth, user.email, password),
      ]);
      navigate("/");
    }
  };

  return (
    <FormWrapper>
      <Logo />
      <h1>Log in to Twitter</h1>
      <Input
        type="text"
        placeholder="Phone number, email address"
        name="login"
        value={login}
        onChange={handleLoginChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        $variant="primary"
        $size="large"
        type="submit"
        onClick={handleSubmit}
      >
        Log In
      </Button>
      <InlineLink to="/signup" $align="right">
        Sign up to Twitter
      </InlineLink>
    </FormWrapper>
  );
}
