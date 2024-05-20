import { FieldErrors } from "react-hook-form";

import { StyledError } from "./styled";

export function ErrorsSummary({ errors }: FieldErrors) {
  return (
    <>
      {errors && (
        <ul>
          {Object.entries(errors).map(([key, error], index) => (
            <StyledError key={`${index}-${key}-${error.message}`}>
              - {error.message}
            </StyledError>
          ))}
        </ul>
      )}
    </>
  );
}
