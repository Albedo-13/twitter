import { ReactNode } from "react";

import { StyledPropsType } from "@/types/styled-types";

import { Image, StyledButton } from "./styled";

type ButtonProps = {
  icon?: string;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  $variant: "primary" | "outlined" | "secondary";
  $size: "small" | "medium" | "large";
  $margin?: string;
  onClick?: VoidFunction;
};

export function Button({
  icon,
  children,
  type,
  $variant,
  $size,
  $margin,
  onClick,
  ...props
}: ButtonProps & StyledPropsType) {
  return (
    <StyledButton
      type={type}
      $variant={$variant}
      $size={$size}
      $margin={$margin}
      onClick={onClick}
      {...props}
    >
      {icon && <Image src={icon} alt="button icon" />}
      {children}
    </StyledButton>
  );
}
