import { Logo } from "@/components/logo/logo";
import { Button } from "@/ui/buttons/buttons";
import { Input } from "@/ui/inputs/inputs";
import { InlineLink } from "@/ui/links/links";

import { FormWrapper } from "./styled";

export function LoginPage() {
  return (
    <FormWrapper>
      <Logo />
      <h1>Log in to Twitter</h1>
      <Input type="text" placeholder="Phone number, email address" />
      <Input type="password" placeholder="Password" />
      <Button $variant="primary" $size="large" type="submit">Log In</Button>
      <InlineLink to="#" $align="right">Sign up to Twitter</InlineLink>
    </FormWrapper>
  );
}
