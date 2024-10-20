import { AuthPage } from "@/pages/auth-page/auth-page";
import { BookmarksPage } from "@/pages/bookmarks-page/bookmarks-page";
import { ChatPage } from "@/pages/chat-page/chat-page";
import { FeedPage } from "@/pages/feed-page/feed-page";
import { LoginPage } from "@/pages/login-page/login-page";
import { MessagesPage } from "@/pages/messages-page/messages-page";
import { PostPage } from "@/pages/post-page/post-page";
import { ProfilePage } from "@/pages/profile-page/profile-page";
import { SignupPage } from "@/pages/signup-page/signup-page";

export enum ROUTES {
  SIGNUP = "/signup",
  LOGIN = "/login",
  AUTH = "/auth",
  ALL = "*",
  HOME = "/",
  MESSAGES = "/messages",
  //так нада поверь
  //eslint-disable-next-line
  CHAT = "/messages",
  BOOKMARKS = "/bookmarks",
  PROFILE = "/profile",
  POST = "/post",
}

export const publicRoutes = [
  {
    path: ROUTES.SIGNUP,
    element: SignupPage,
  },
  {
    path: ROUTES.LOGIN,
    element: LoginPage,
  },
  {
    path: ROUTES.AUTH,
    element: AuthPage,
  },
  {
    path: ROUTES.ALL,
    element: AuthPage,
  },
];

export const privateRoutes = [
  {
    path: ROUTES.HOME,
    element: FeedPage,
  },
  {
    path: ROUTES.MESSAGES,
    element: MessagesPage,
  },
  {
    path: ROUTES.CHAT + "/:id",
    element: ChatPage,
  },
  {
    path: ROUTES.BOOKMARKS,
    element: BookmarksPage,
  },
  {
    path: ROUTES.PROFILE,
    element: ProfilePage,
  },
  {
    path: ROUTES.POST + "/:id",
    element: PostPage,
  },
];
