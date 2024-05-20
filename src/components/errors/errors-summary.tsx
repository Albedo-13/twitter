import { FieldErrors } from "react-hook-form";

import { StyledError } from "./styled";

export function ErrorsSummary({ errors }: FieldErrors) {
  return (
    <>
      {errors && (
        <ul>
          {Object.keys(errors).map((key, index) => (
            <StyledError key={index}>- {(errors as any)[key].message}</StyledError>
          ))}
        </ul>
      )}
    </>
  );
}
