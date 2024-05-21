import { ChangeEvent, forwardRef, Ref } from "react";

import { GENDERS } from "@/constants/genders";

import { StyledOption, StyledSelect } from "./styled";

type SelectProps = {
  name: string;
  options: typeof GENDERS | string[] | number[];
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = forwardRef(
  (
    { name, options, placeholder, onChange }: SelectProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <StyledSelect name={name} defaultValue="" onChange={onChange} ref={ref}>
        {placeholder && (
          <StyledOption value="" disabled>
            {placeholder}
          </StyledOption>
        )}
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
);
