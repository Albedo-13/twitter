import { ThemeType } from "../slices/theme-slice";

type State = {
  themeReducer: ThemeType;
};

export const getThemeSelector = (state: State) => state.themeReducer.theme;
