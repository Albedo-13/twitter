import googleIcon from "@/assets/icons/google-icon.svg";
import twitterBackground from "@/assets/imgs/back-twitter.webp";
import { Logo } from "@/components/logo/logo";
import { AUTH_FOOTER_LINKS } from "@/constants/auth-footer-links";
import { SignupButton } from "@/ui/buttons/buttons";
import { BasicLink, InlineLink } from "@/ui/links/links";

import {
  AuthFooterWrapper,
  AuthWrapper,
  Background,
  H1,
  H2,
  LoginText,
  PolicyText,
  Wrapper,
} from "./styled";

export function AuthPage() {
  return (
    <>
      <Wrapper>
        <Background src={twitterBackground} alt="twitter background" />
        <AuthWrapper>
          <Logo />
          <H1>Happening now</H1>
          <H2>Join Twitter today</H2>
          <SignupButton icon={googleIcon}>Sign up with Google</SignupButton>
          <SignupButton>Sign up with email</SignupButton>
          <PolicyText>
            By singing up you agree to the{" "}
            <InlineLink to="#">Terms of Service</InlineLink> and{" "}
            <InlineLink to="#">Privacy Policy</InlineLink>, including{" "}
            <InlineLink to="#">Cookie Use</InlineLink>.
          </PolicyText>
          <LoginText>
            Already have an account? <InlineLink to="#">Log in</InlineLink>
          </LoginText>
        </AuthWrapper>
      </Wrapper>

      <AuthFooterWrapper>
        {AUTH_FOOTER_LINKS.map(({ to, label }) => (
          <BasicLink to={to}>{label}</BasicLink>
        ))}
      </AuthFooterWrapper>
    </>
  );
}
