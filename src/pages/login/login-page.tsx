import styled from "styled-components";

import { Logo } from "@/components/logo/logo";
import { SignupButtonPrimary } from "@/ui/buttons/buttons";
import { FormInput } from "@/ui/inputs/inputs";
import { InlineLink } from "@/ui/links/links";

import { FormWrapper } from "./styled";

// TODO: rework style overlap
const InlineLinkExtended = styled(InlineLink)`
  color: red;
`;

export function LoginPage() {
  return (
    <FormWrapper>
      <Logo />
      <h1>Log in to Twitter</h1>
      <FormInput type="text" placeholder="Phone number, email address" />
      <FormInput type="password" placeholder="Password" />
      <SignupButtonPrimary type="submit" value="Log In" />
      <InlineLink to="#">Sign up to Twitter</InlineLink>
      <InlineLinkExtended to="#">Sign up to Twitter</InlineLinkExtended>
    </FormWrapper>
  );
}
