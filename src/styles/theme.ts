export const theme = {
  color: {
    primary: "#2f80ed",
  },
  spacing: {
    s5: "5px",
    s10: "10px",
    s15: "15px",
    s20: "20px",
    s30: "30px",
    s40: "40px",
    s80: "80px",
    s350: "350px",
  },
  fontSize: {
    fs18: "18px",
    fs20: "20px",
  },
  fontWeight: {
    fw600: 600,
    fw700: 700,
    fw900: 700,
  },
};

export const themeDark: typeof theme = {
  ...theme,
  color: {
    primary: "red",
  },
};

export const themeLight: typeof theme = {
  ...theme,
  color: {
    primary: "green",
  },
};
