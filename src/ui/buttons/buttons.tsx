import { ReactNode } from "react";

import { Image, StyledButton } from "./styled";

type ButtonProps = {
  icon?: string;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  $variant: "primary" | "outlined" | "secondary";
  $size: "small" | "medium" | "large";
  $margin?: string;
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function Button({
  icon,
  children,
  type,
  $variant,
  $size,
  $margin,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      $variant={$variant}
      $size={$size}
      $margin={$margin}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="button icon" />}
      {children}
    </StyledButton>
  );
}
