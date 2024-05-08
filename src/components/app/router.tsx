import { createBrowserRouter } from "react-router-dom";

import { AuthPage } from "@/pages/auth-page/auth-page";
import { FeedPage } from "@/pages/feed-page/feed-page";
import { LoginPage } from "@/pages/login-page/login-page";
import { ProfilePage } from "@/pages/profile-page/profile-page";
import { SignupPage } from "@/pages/signup-page/signup-page";

import { Layout } from "../layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FeedPage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/auth", element: <AuthPage /> },
]);
