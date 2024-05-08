
import { StyledInput } from "./styled";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  $width?: string,
  $margin?: string,
};

export function Input({
  type,
  placeholder,
  $width,
  $margin
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      $width={$width}
      $margin={$margin}
    />
  );
}
