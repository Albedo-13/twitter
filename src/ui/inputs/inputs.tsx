import { ChangeEvent, forwardRef } from "react";

import { StyledInput } from "./styled";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, value, name, onChange }, ref) => {
    return (
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);
