import { FieldError } from "react-hook-form";

type FormErrorProps = {
  inputFor: FieldError | undefined;
};

export default function FormError({ inputFor }: FormErrorProps) {
  return <>{inputFor && <p>{inputFor.message}</p>}</>;
}
