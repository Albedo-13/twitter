import { ReactNode } from "react";

import { BasicLinkDark, InlineLinkBlue } from "./styled";

export function InlineLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return <InlineLinkBlue to={to}>{children}</InlineLinkBlue>;
}

export function BasicLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return <BasicLinkDark to={to}>{children}</BasicLinkDark>;
}
