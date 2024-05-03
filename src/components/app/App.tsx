import { BrowserRouter } from "react-router-dom";

// import { AuthPage } from "@/pages/auth/auth-page";
// import { SignupPage } from "@/pages/signup/signup-page";
// import { LoginPage } from "@/pages/login/login-page";
import { ProfilePage } from "@/pages/profile/profile-page";
import { GlobalStyle } from "@/styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProfilePage />
    </BrowserRouter>
  );
}
