import { ReactNode } from "react";

import { LogoutButton, SignupButtonImage, SignupButtonPrimaryStyled,SignupButtonStyled } from "./styled";

type SignupButtonProps = {
  icon?: string;
  children: ReactNode;
};

type ButtonPrimaryProps = {
  type: "submit" | "button";
  value: string;
};

export function SignupButton({ icon, children }: SignupButtonProps) {
  return (
    <SignupButtonStyled>
      {icon && <SignupButtonImage src={icon} alt="button prefix image" />}
      {children}
    </SignupButtonStyled>
  );
}

export function SignupButtonPrimary({ type, value }: ButtonPrimaryProps) {
  return <SignupButtonPrimaryStyled type={type} value={value} />;
}

export function ButtonGrayed({ type, value }: ButtonPrimaryProps) {
  return <LogoutButton type={type} value={value} />;
}
