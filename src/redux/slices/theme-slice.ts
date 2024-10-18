import { createSlice } from "@reduxjs/toolkit";

export type ThemeType = {
  theme: string;
};

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light"
      document.querySelector(":root")!.className = newTheme;
      state.theme = newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
