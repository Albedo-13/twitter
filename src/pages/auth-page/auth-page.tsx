import { signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
// TODO насрал убери
//@ts-ignore
import { useNavigate } from "react-router-dom";

import googleIcon from "@/assets/icons/google-icon.svg";
import { Logo } from "@/components/logo/logo";
import { AUTH_FOOTER_LINKS } from "@/constants/footer-links";
import { ROUTES } from "@/constants/routes";
import { auth, db, googleProvider } from "@/firebase";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/redux/slices/user-slice";
import { Button } from "@/ui/buttons";
import { BasicLink, InlineLink } from "@/ui/links";
import { adaptUserObj, queryUserEqualByValue } from "@/utils/firebase/helpers";

import {
  AuthFooterWrapper,
  AuthWrapper,
  ButtonWrapper,
  H1,
  H2,
  LoginText,
  LogoWrapper,
  PolicyText,
  Background,
  Wrapper,
} from "./styled";

export function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignupClick = () => {
    navigate(ROUTES.SIGNUP);
  };

  const handleSignupWithGoogleClick = async () => {
    await signInWithPopup(auth, googleProvider).then(async (userCredential) => {
      const user = userCredential.user;

      const newUser = {
        uid: user.uid,
        phone: user.phoneNumber || "",
        email: user.email,
        photoURL: user.photoURL || "",
        displayName: user.displayName,
      };

      const queryUserSnapshot = await queryUserEqualByValue("uid", user.uid);

      if (queryUserSnapshot.empty) {
        await addDoc(collection(db, "users"), newUser);
      }
      dispatch(setUser(adaptUserObj(user)));
    });

    navigate(ROUTES.HOME);
  };

  return (
    <>
      <div className="gridInterface">
        <Wrapper>
          {/* <TwitterBackground src={twitterBackground} alt="twitter background" /> */}
          <AuthWrapper>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <div>
              <H1>Happening now</H1>
              <H2>Join Twitter today</H2>

              <ButtonWrapper>
                <Button
                  icon={googleIcon}
                  variant="outlined"
                  size="large"
                  onClick={handleSignupWithGoogleClick}
                >
                  Sign up with Google
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleSignupClick}
                >
                  Sign up with email
                </Button>
              </ButtonWrapper>
              <PolicyText>
                By singing up you agree to the{" "}
                <InlineLink to="#">Terms of Service</InlineLink> and{" "}
                <InlineLink to="#">Privacy Policy</InlineLink>, including{" "}
                <InlineLink to="#">Cookie Use</InlineLink>.
              </PolicyText>
              <LoginText>
                Already have an account?{" "}
                <InlineLink to={ROUTES.LOGIN}>Log in</InlineLink>
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
        <Background />
      </div>
    </>
  );
}
