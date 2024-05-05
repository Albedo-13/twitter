import { createBrowserRouter } from "react-router-dom";

import { AuthPage } from "@/pages/auth-page/auth-page";
import { FeedPage } from "@/pages/feed-page/feed-page";
import { LoginPage } from "@/pages/login-page/login-page";
import { ProfilePage } from "@/pages/profile-page/profile-page";
import { SignupPage } from "@/pages/signup-page/signup-page";

export const router = createBrowserRouter([
  { path: "/", element: <FeedPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/profile/:id", element: <ProfilePage /> },
]);