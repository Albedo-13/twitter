import { createBrowserRouter, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";

import { Layout } from "../layout/layout";

const ProtectedRoutes = () => {
  // TODO: базовое значение - null. Убрать .email
  const user = useAppSelector((state) => state.userReducer.email);
  
  console.log("user email in storage", user);
  return user ? <Layout /> : <Navigate to="/login" replace />;
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
