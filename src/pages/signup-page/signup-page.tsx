import { ChangeEvent, useState } from "react";

import { Logo } from "@/components/logo/logo";
import { MONTHS, YEARS } from "@/constants/dates";
import { SignupButtonPrimary } from "@/ui/buttons/buttons";
import { FormInput, FormSelect } from "@/ui/inputs/inputs";
import { InlineLink } from "@/ui/links/links";
import { getDaysFromMonth } from "@/utils/get-days-from-month";

import {
  FormWrapper,
  H1,
  H2,
  LogoWrapper,
  SelectWrapper,
  Text,
} from "./styled";

export function SignupPage() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
  };

  return (
    <FormWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <H1>Create an account</H1>
      <FormInput type="text" placeholder="Name" />
      <FormInput type="text" placeholder="Phone number" />
      <FormInput type="text" placeholder="Email" />
      <InlineLink to="#">Use email</InlineLink>
      <H2>Date of birth</H2>
      <Text>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
      </Text>
      <SelectWrapper>
        <FormSelect
          placeholder="Years"
          options={YEARS}
          onChange={handleYearChange}
        />
        <FormSelect
          placeholder="Months"
          options={MONTHS}
          onChange={handleMonthChange}
          width={"200px"}
        />
        <FormSelect
          placeholder="Days"
          options={getDaysFromMonth(+year, MONTHS.indexOf(month))}
          width={"200px"}
        />
      </SelectWrapper>

      <SignupButtonPrimary type="submit" value="Next" />
    </FormWrapper>
  );
}
