import { BLUE_SVG, DARK_SVG, GRAY_SVG } from "@/constants/svg-colors";

export const theme = {
  colorScheme: "light",
  color: {
    primary: "#2f80ed",
    secondary: "#b3b8bb",
    accents: "#1da1f2",
    placeholder: "#828282",
    black: "#000000",
    white: "#ffffff",
    searchInput: "#eff3f4",
    text: "#000000",
  },
  spacing: {
    s5: "5px",
    s10: "10px",
    s15: "15px",
    s20: "20px",
    s25: "25px",
    s30: "30px",
    s35: "35px",
    s40: "40px",
    s45: "45px",
    s50: "50px",
    s55: "55px",
    s60: "60px",
    s75: "75px",
    s80: "80px",
    s120: "120px",
    s230: "230px",
    s280: "280px",
    s330: "330px",
    s350: "350px",
    s370: "370px",
    s450: "450px",
    s750: "750px",
  },
  fontSize: {
    fs14: "14px",
    fs18: "18px",
    fs20: "20px",
    fs22: "22px",
    fs24: "24px",
    fs30: "30px",
    fs42: "42px",
    fs84: "84px",
  },
  fontWeight: {
    fw500: 500,
    fw600: 600,
    fw700: 700,
    fw900: 900,
  },
  svgFill: {
    primary: DARK_SVG,
    active: BLUE_SVG,
  },
  border: {
    gray: "1px solid #d8d8d8",
  },
  layers: {
    l1: 1,
    l2: 10,
  },
  blur: "6px",
};

export const themeDark: typeof theme = {
  ...theme,
  colorScheme: "dark",
  svgFill: {
    ...theme.svgFill,
    primary: GRAY_SVG,
  },
  color: {
    ...theme.color,
    placeholder: "#b3b8bb",
    searchInput: "#4a4a4a",
    text: "#ffffff",
  },
};

export const themeLight: typeof theme = {
  ...theme,
  colorScheme: "light",
};
