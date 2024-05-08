
import { ChangeEvent } from "react";

import { StyledInput } from "./styled";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  value?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  $width?: string,
  $margin?: string,
};

export function Input({
  type,
  placeholder,
  value,
  onChange,
  $width,
  $margin
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      $width={$width}
      $margin={$margin}
    />
  );
}
