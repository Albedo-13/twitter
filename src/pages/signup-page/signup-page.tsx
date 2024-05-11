import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export function SignupPage() {
  const [formState, setFormState] = useState({
    displayName: "",
    phone: "",
    email: "",
    password: "",
    year: "",
    month: "",
    day: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFormStateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        const user = userCredential.user;

        const newUser = {
          uid: user.uid,
          phone: formState.phone,
          email: formState.email,
          displayName: formState.displayName,
          birthday: new Date(
            Number(formState.year),
            Number(MONTHS.indexOf(formState.month)),
            Number(formState.day)
          ).toString(),
        };

        addDoc(collection(db, "users"), newUser);
        dispatch(setUser(newUser));

        navigate("/");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <FormWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <H1>Create an account</H1>
      <Input
        type="text"
        placeholder="Name"
        name="displayName"
        value={formState.displayName}
        onChange={handleFormStateChange}
      />
      <Input
        type="text"
        placeholder="Phone number"
        name="phone"
        value={formState.phone}
        onChange={handleFormStateChange}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={handleFormStateChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formState.password}
        onChange={handleFormStateChange}
      />
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
          <Select
            placeholder="Years"
            name="year"
            options={YEARS}
            onChange={handleFormStateChange}
          />
        </SelectWrapperGrow>

        <Select
          placeholder="Months"
          name="month"
          options={MONTHS}
          onChange={handleFormStateChange}
        />
        <Select
          placeholder="Days"
          name="day"
          options={getDaysFromMonth(
            +formState.year,
            MONTHS.indexOf(formState.month)
          )}
          onChange={handleFormStateChange}
        />
      </SelectWrapper>
      <ButtonWrapper>
        <Button
          type="submit"
          $variant="primary"
          $size="large"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
}
