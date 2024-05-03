import { ChangeEvent } from "react";

import { StyledInput, StyledOption, StyledSelect } from "./styled";

export function SignupInput({
  type,
  placeholder,
  width,
}: {
  type: string;
  placeholder: string;
  width?: string;
}) {
  return <StyledInput type={type} placeholder={placeholder} width={width} />;
}

export function SignupSelect({
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
