import { BrowserRouter } from "react-router-dom";

// import { AuthPage } from "@/pages/auth-page/auth-page";
// import { SignupPage } from "@/pages/signup-page/signup-page";
// import { LoginPage } from "@/pages/login-page/login-page";
import { ProfilePage } from "@/pages/profile-page/profile-page";
import { GlobalStyle } from "@/styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProfilePage />
    </BrowserRouter>
  );
}
