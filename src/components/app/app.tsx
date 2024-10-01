import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "@/hooks/redux";
import { getThemeSelector } from "@/redux/selectors/theme-selectors";
import { GlobalStyle } from "@/styles/global";
import { themeDark, themeLight } from "@/styles/theme";

import { router } from "./router";
import { ToastContainer } from "react-toastify";

export function App() {
  const theme = useAppSelector(getThemeSelector);

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
