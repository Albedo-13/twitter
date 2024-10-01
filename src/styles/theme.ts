import { BLUE_SVG, DARK_SVG, GRAY_SVG } from "@/constants/svg-colors";

import { device } from "./media";

export const theme = {
  colorScheme: "light",
  svgFill: {
    primary: DARK_SVG,
    active: BLUE_SVG,
  },
  layers: {
    l1: 1,
    l2: 10,
  },
  opacity: 0.6,
  blur: "6px",
  device,
};

export const themeDark: typeof theme = {
  ...theme,
  colorScheme: "dark",
  svgFill: {
    ...theme.svgFill,
    primary: GRAY_SVG,
  },
  // color: {
  //   ...theme.color,
  //   placeholder: "#b3b8bb",
  //   searchInput: "#4a4a4a",
  //   text: "#ffffff",
  //   background: "#171717",
  // },
};

export const themeLight: typeof theme = {
  ...theme,
  colorScheme: "light",
};
