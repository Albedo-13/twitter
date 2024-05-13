import { FieldError } from "react-hook-form";

import { StyledError } from "./styled";

type FormErrorProps = {
  inputFor: FieldError | undefined;
};

export function FormError({ inputFor }: FormErrorProps) {
  return <>{inputFor && <StyledError>{inputFor.message}</StyledError>}</>;
}
