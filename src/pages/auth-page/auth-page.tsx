import googleIcon from "@/assets/icons/google-icon.svg";
import twitterBackground from "@/assets/imgs/back-twitter.webp";
import { Logo } from "@/components/logo/logo";
import { AUTH_FOOTER_LINKS } from "@/constants/footer-links";
import { Button } from "@/ui/buttons/buttons";
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
  WrapperLeft,
  WrapperRight,
} from "./styled";

export function AuthPage() {
  return (
    <>
      <Wrapper>
        <Background src={twitterBackground} alt="twitter background" />
        <AuthWrapper>
          <WrapperLeft>
            <Logo />
          </WrapperLeft>
          <WrapperRight>
            <H1>Happening now</H1>
            <H2>Join Twitter today</H2>
            <Button
              icon={googleIcon}
              $variant="outlined"
              $size="large"
              $margin="25px 0 0 0"
            >
              Sign up with Google
            </Button>
            <Button $variant="outlined" $size="large" $margin="25px 0 0 0">
              Sign up with email
            </Button>
            <PolicyText>
              By singing up you agree to the{" "}
              <InlineLink to="#">Terms of Service</InlineLink> and{" "}
              <InlineLink to="#">Privacy Policy</InlineLink>, including{" "}
              <InlineLink to="#">Cookie Use</InlineLink>.
            </PolicyText>
            <LoginText>
              Already have an account? <InlineLink to="#">Log in</InlineLink>
            </LoginText>
          </WrapperRight>
        </AuthWrapper>
      </Wrapper>

      <AuthFooterWrapper>
        {AUTH_FOOTER_LINKS.map(({ to, label }) => (
          <BasicLink key={`${label}-${to}`} to={to}>
            {label}
          </BasicLink>
        ))}
      </AuthFooterWrapper>
    </>
  );
}