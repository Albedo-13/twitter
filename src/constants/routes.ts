import { AuthPage } from "@/pages/auth-page/auth-page";
import { FeedPage } from "@/pages/feed-page/feed-page";
import { LoginPage } from "@/pages/login-page/login-page";
import { ProfilePage } from "@/pages/profile-page/profile-page";
import { SignupPage } from "@/pages/signup-page/signup-page";

export const publicRoutes = [
  {
    path: "/signup",
    element: SignupPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/auth",
    element: AuthPage,
  },
  {
    path: "*",
    element: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: FeedPage,
  },
  {
    path: "/profile",
    element: ProfilePage,
  },
];
