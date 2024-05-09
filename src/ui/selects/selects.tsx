import { ChangeEvent } from "react";

import { GENDERS } from "@/constants/modal-helpers";

import { StyledOption, StyledSelect } from "./styled";

type SelectProps = {
  placeholder: string;
  name: string;
  options: typeof GENDERS | string[] | number[];
  width?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({
  placeholder,
  name,
  options,
  width,
  onChange,
}: SelectProps) {
  return (
    <StyledSelect
      name={name}
      defaultValue=""
      onChange={onChange}
      $width={width}
    >
      <StyledOption value="" disabled>
        {placeholder}
      </StyledOption>
      {Array.isArray(options)
        ? options.map((option) => (
            <StyledOption key={option.toString()} value={option}>
              {option}
            </StyledOption>
          ))
        : Object.keys(options).map((option: string) => (
            <StyledOption
              key={option}
              value={options[option as keyof typeof options]}
            >
              {option}
            </StyledOption>
          ))}
    </StyledSelect>
  );
}
