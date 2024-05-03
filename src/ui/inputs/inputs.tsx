import { ChangeEvent } from "react";

import { StyledInput, StyledOption, StyledSelect } from "./styled";

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
