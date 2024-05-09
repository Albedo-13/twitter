import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import googleIcon from "@/assets/icons/google-icon.svg";
import twitterBackground from "@/assets/imgs/back-twitter.webp";
import { Logo } from "@/components/logo/logo";
import { AUTH_FOOTER_LINKS } from "@/constants/footer-links";
import { auth, googleProvider } from "@/firebase";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { BasicLink, InlineLink } from "@/ui/links";
import { adaptUserObj } from "@/utils/firebase/helpers";

import {
  AuthFooterWrapper,
  AuthWrapper,
  H1,
  H2,
  LoginText,
  PolicyText,
  Wrapper,
} from "./styled";

export function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleSignupWithGoogleClick = async () => {
    await signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      dispatch(setUser(adaptUserObj(user)));
    });

    navigate("/");
  };

  return (
    <>
      <Wrapper>
        <img src={twitterBackground} alt="twitter background" />
        <AuthWrapper>
          <div>
            <Logo />
          </div>
          <div>
            <H1>Happening now</H1>
            <H2>Join Twitter today</H2>
            <Button
              icon={googleIcon}
              $variant="outlined"
              $size="large"
              $margin="25px 0 0 0"
              onClick={handleSignupWithGoogleClick}
            >
              Sign up with Google
            </Button>
            <Button
              $variant="outlined"
              $size="large"
              $margin="25px 0 0 0"
              onClick={handleSignupClick}
            >
              Sign up with email
            </Button>
            <PolicyText>
              By singing up you agree to the{" "}
              <InlineLink to="#">Terms of Service</InlineLink> and{" "}
              <InlineLink to="#">Privacy Policy</InlineLink>, including{" "}
              <InlineLink to="#">Cookie Use</InlineLink>.
            </PolicyText>
            <LoginText>
              Already have an account?{" "}
              <InlineLink to="/login">Log in</InlineLink>
            </LoginText>
          </div>
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
