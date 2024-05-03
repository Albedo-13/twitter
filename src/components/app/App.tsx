import { BrowserRouter } from "react-router-dom";

// import { AuthPage } from "@/pages/auth/auth-page";
import { SignupPage } from "@/pages/signup/signup-page";
import { GlobalStyle } from "@/styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <SignupPage />
    </BrowserRouter>
  );
}
