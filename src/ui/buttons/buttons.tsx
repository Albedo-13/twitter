import { ReactNode } from "react";

import { SignupButtonImage, SignupButtonStyled } from "./styled";

type SignupButtonProps = {
  icon?: string;
  children: ReactNode;
};

export function SignupButton({ icon, children }: SignupButtonProps) {
  return (
    <SignupButtonStyled>
      {icon && <SignupButtonImage src={icon} alt="button prefix image" />}
      {children}
    </SignupButtonStyled>
  );
}
