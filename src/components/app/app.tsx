import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "@/hooks/redux";
import { GlobalStyle } from "@/styles/global";
import { themeDark, themeLight } from "@/styles/theme";

import { router } from "./router";

export function App() {
  const theme = useAppSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
