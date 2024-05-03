import { ChangeEvent } from "react";

import { StyledPropsType } from "@/types/styled-types";

import { LogoutButton, SignupButtonPrimaryStyled, StyledInput, StyledOption, StyledSelect } from "./styled";

type ButtonProps = {
  type: "submit" | "button";
  value: string;
};

// TODO: isolate types
export function FormInput({
  type,
  placeholder,
  width,
}: {
  type: "text" | "password";
  placeholder: string;
  width?: string;
}) {
  return <StyledInput type={type} placeholder={placeholder} width={width} />;
}

export function FormSelect({
  placeholder,
  options,
  width,
  onChange
}: {
  placeholder: string;
  options: string[] | number[];
  width?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <StyledSelect $width={width} defaultValue="" onChange={onChange}>
      <StyledOption value="" disabled>
        {placeholder}
      </StyledOption>
      {options.map((option) => (
        <StyledOption key={option} value={option}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

export function SignupButtonPrimary({
  type,
  value,
  ...props
}: ButtonProps & StyledPropsType) {
  return <SignupButtonPrimaryStyled type={type} value={value} {...props} />;
}

export function ButtonGrayed({
  type,
  value,
  ...props
}: ButtonProps & StyledPropsType) {
  return <LogoutButton type={type} value={value} {...props} />;
}
