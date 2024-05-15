import { ReactNode, SyntheticEvent } from "react";

import { Image, StyledButton } from "./styled";

type ButtonProps = {
  icon?: string;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  variant: "primary" | "outlined" | "secondary";
  size: "small" | "medium" | "large";
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
};

export function Button({
  icon,
  children,
  type,
  variant,
  size,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton type={type} $variant={variant} $size={size} onClick={onClick}>
      {icon && <Image src={icon} alt="button icon" />}
      {children}
    </StyledButton>
  );
}
