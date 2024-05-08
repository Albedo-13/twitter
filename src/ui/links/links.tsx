import { ReactNode } from "react";

import { BasicLinkDark, InlineLinkBlue } from "./styled";

type LinkType = {
  to: string;
  children: ReactNode;
};

export function InlineLink({ to, children }: LinkType) {
  return <InlineLinkBlue to={to}>{children}</InlineLinkBlue>;
}

export function BasicLink({ to, children }: LinkType) {
  return <BasicLinkDark to={to}>{children}</BasicLinkDark>;
}
