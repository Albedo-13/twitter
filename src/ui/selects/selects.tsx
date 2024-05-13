import { ChangeEvent, forwardRef, Ref } from "react";

import { GENDERS } from "@/constants/genders";

import { StyledOption, StyledSelect } from "./styled";

type SelectProps = {
  placeholder: string;
  name: string;
  options: typeof GENDERS | string[] | number[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = forwardRef(
  (
    { placeholder, name, options, onChange }: SelectProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <StyledSelect name={name} defaultValue="" onChange={onChange} ref={ref}>
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
);
