import { ReactNode } from "react";

import { StyledPropsType } from "@/types/styled-types";

import { BasicLinkDark, InlineLinkBlue } from "./styled";

type LinkType = {
  to: string;
  children: ReactNode;
};

// TODO: rework
export function InlineLink({
  to,
  children,
  ...props
}: LinkType & StyledPropsType) {
  return (
    <InlineLinkBlue to={to} {...props}>
      {children}
    </InlineLinkBlue>
  );
}

export function BasicLink({
  to,
  children,
  ...props
}: LinkType & StyledPropsType) {
  return (
    <BasicLinkDark to={to} {...props}>
      {children}
    </BasicLinkDark>
  );
}
