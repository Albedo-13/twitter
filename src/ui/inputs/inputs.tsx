import { StyledPropsType } from "@/types/styled-types";

import { StyledInput } from "./styled";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
};

export function Input({
  type,
  placeholder,
  width,
  margin,
  ...props
}: InputProps & StyledPropsType) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      width={width}
      margin={margin}
      {...props}
    />
  );
}
