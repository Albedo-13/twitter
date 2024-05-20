import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthFirebaseError } from "@/components/errors/auth-error";
import { Logo } from "@/components/logo/logo";
import { auth } from "@/firebase";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { InlineLink } from "@/ui/links";
import { authErrorsHandler } from "@/utils/firebase/auth-errors-handler";
import {
  adaptUserObj,
  getLoginFromEmailOrPhone,
  queryUserEqualByValue,
} from "@/utils/firebase/helpers";

import { FormWrapper } from "./styled";

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const onSubmit = async (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const queryEmailSnapshot = await queryUserEqualByValue("email", login);
    const queryPhoneSnapshot = await queryUserEqualByValue("phone", login);

    const user = getLoginFromEmailOrPhone(
      queryEmailSnapshot,
      queryPhoneSnapshot
    );

    if (user) {
      try {
        await signInWithEmailAndPassword(auth, user.email, password);
        dispatch(setUser(adaptUserObj(user)));
        navigate("/");
      } catch (error) {
        if (error instanceof FirebaseError) {
          setError(authErrorsHandler(error.code));
        }
      }
    } else {
      setError("User not found: Wrong login or password");
    }
  };

  return (
    <FormWrapper>
      <Logo />
      <h1>Log in to Twitter</h1>
      <Input
        name="login"
        type="text"
        placeholder="Phone number, email address"
        value={login}
        onChange={handleLoginChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <AuthFirebaseError errorText={error} />
      <Button variant="primary" size="large" type="button" onClick={onSubmit}>
        Log In
      </Button>
      <InlineLink to="/signup" align="right">
        Sign up to Twitter
      </InlineLink>
    </FormWrapper>
  );
}
