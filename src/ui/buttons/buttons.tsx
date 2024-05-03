import { ReactNode } from "react";

import { StyledPropsType } from "@/types/styled-types";

import {
  EditButton,
  SignupButtonImage,
  SignupButtonStyled,
} from "./styled";

type SignupButtonProps = {
  icon?: string;
  children: ReactNode;
};

export function SignupButton({
  icon,
  children,
  ...props
}: SignupButtonProps & StyledPropsType) {
  return (
    <SignupButtonStyled {...props}>
      {icon && <SignupButtonImage src={icon} alt="button prefix image" />}
      {children}
    </SignupButtonStyled>
  );
}

export function EditButtonOutlined({
  children,
  ...props
}: SignupButtonProps & StyledPropsType) {
  return <EditButton {...props} >{children}</EditButton>;
}