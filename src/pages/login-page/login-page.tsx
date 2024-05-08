import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "@/components/logo/logo";
import { auth, db } from "@/firebase";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { InlineLink } from "@/ui/links";

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

  // 1 TODO: REWORK
  // 2 TODO: переработать слайс
  // 3 TODO: обе регистрации сохраняют в стейт пользователя
  // 4 TODO: персист стора, юзер сохраняется после перезагрузки страницы (и смены роута)
  const getUserByEmailOrPhone = async (login: string) => {
    const queryByEmail = query(
      collection(db, "users"),
      where("email", "==", login)
    );
    const queryByPhone = query(
      collection(db, "users"),
      where("phone", "==", login)
    );

    const queryEmailSnapshot = await getDocs(queryByEmail);
    const queryPhoneSnapshot = await getDocs(queryByPhone);

    if (queryEmailSnapshot.empty && queryPhoneSnapshot.empty) {
      return login;
    } else if (!queryEmailSnapshot.empty) {
      return queryEmailSnapshot.docs[0].data().email;
    } else if (!queryPhoneSnapshot.empty) {
      return queryPhoneSnapshot.docs[0].data().email;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userLogin = await getUserByEmailOrPhone(login);
    await signInWithEmailAndPassword(auth, userLogin, password);

    const queryByEmail = query(
      collection(db, "users"),
      where("email", "==", login)
    );
    const queryByPhone = query(
      collection(db, "users"),
      where("phone", "==", login)
    );

    const queryEmailSnapshot = await getDocs(queryByEmail);
    const queryPhoneSnapshot = await getDocs(queryByPhone);

    let user = queryEmailSnapshot.docs[0].data();
    if (!user) {
      user = queryPhoneSnapshot.docs[0].data();
    }

    await dispatch(
      setUser({
        id: user?.uid,
        email: user?.email,
        phone: user?.phone,
      })
    );

    if (user) {
      console.log("submit finish, redirect to /", user);
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
