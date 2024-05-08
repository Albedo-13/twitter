import { Logo } from "@/components/logo/logo";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { InlineLink } from "@/ui/links";

import { FormWrapper } from "./styled";

export function LoginPage() {
  return (
    <FormWrapper>
      <Logo />
      <h1>Log in to Twitter</h1>
      <Input type="text" placeholder="Phone number, email address" />
      <Input type="password" placeholder="Password" />
      <Button $variant="primary" $size="large" type="submit">Log In</Button>
      <InlineLink to="/signup" $align="right">Sign up to Twitter</InlineLink>
    </FormWrapper>
  );
}
