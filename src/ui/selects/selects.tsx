import { ChangeEvent } from "react";

import { StyledOption, StyledSelect } from "./styled";

type SelectProps = {
  placeholder: string;
  options: string[] | number[];
  width?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ placeholder, options, width, onChange }: SelectProps) {
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
