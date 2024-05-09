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
  getLoginFromEmailOrPhone,
  getUserObj,
  queryUserEqualByValue,
} from "@/utils/firebase/helpers";

import { FormWrapper } from "./styled";

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  console.log(auth.currentUser); // User is signed in, see docs for a list of available properties

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 2 TODO: переработать слайс
  // 3 TODO: обе регистрации сохраняют в стейт пользователя
  // 4 TODO: персист стора, юзер сохраняется после перезагрузки страницы (и смены роута)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryEmailSnapshot = await queryUserEqualByValue("email", login);
    const queryPhoneSnapshot = await queryUserEqualByValue("phone", login);

    const user = getLoginFromEmailOrPhone(
      queryEmailSnapshot,
      queryPhoneSnapshot
    );

    if (user) {
      dispatch(setUser(getUserObj(user)));
      await signInWithEmailAndPassword(auth, user.email, password);
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
        value={login}
        onChange={handleLoginChange}
      />
      <Input
        type="password"
        placeholder="Password"
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
