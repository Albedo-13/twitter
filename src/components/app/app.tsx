import { RouterProvider } from "react-router-dom";

import { GlobalStyle } from "@/styles/global";

import { router } from "./router";

export function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
