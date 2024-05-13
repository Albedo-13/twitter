import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "@/constants/routes";
import { auth } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";

import { Layout } from "../layout/layout";

const ProtectedRoutes = () => {
  const userId = useAppSelector((state) => state.userReducer.uid);
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

  return userId
    ? isUserAuthed && !isLoading && <Layout />
    : <Navigate to="/auth" replace />;
};

export const router = createBrowserRouter([
  {
    path: "/",
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
