
import { ChangeEvent } from "react";

import { StyledInput } from "./styled";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  name: string,
  value?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  type,
  placeholder,
  value,
  name,
  onChange,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}
