import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserIdSelector } from "@/redux/selectors/user-selectors";

import { Layout } from "../layout/layout";

export const ProtectedRoutes = () => {
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
