import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes,ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserIdSelector } from "@/redux/selectors/user-selectors";

import { Layout } from "../layout/layout";

const ProtectedRoutes = () => {
  const userId = useAppSelector(getUserIdSelector);
  const [isUserAuthed, setIsUserAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsUserAuthed(!!user);
        setIsLoading(false);
      }),
    []
  );

  return userId ? (
    isUserAuthed && !isLoading && <Layout />
  ) : (
    <Navigate to={ROUTES.AUTH} replace />
  );
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <ProtectedRoutes />,
    children: [
      ...privateRoutes.map(({ path, element: Element }) => ({
        path,
        element: <Element />,
      })),
    ],
  },
  ...publicRoutes.map(({ path, element: Element }) => ({
    path,
    element: <Element />,
  })),
]);
