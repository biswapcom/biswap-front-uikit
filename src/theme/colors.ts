import { Colors } from "./types";

export const baseColors = {
  // failure: "#F93B5D",
  // primaryBright: "#53DEE9",
  // primaryDark: "#0098A1",
  // dark: "#102648",

  //BS
  primary: "#1263F1",
  secondary: "#F93B5D",
  success: "#1DC872",
  warning: "#FFDB1C",
  boost: "#7412F1",
  backgroundDark: "#07162D",
  backgroundLight: "#F9FAFD",
  white: "#FFFFFF",
  pastelBlue: "#749BD8",
  tooltip: "#040C1A",
};

export const brandColors = {
  binance: "#F0B90B",
  polygon: "#8247E5",
  telegram: "#239FDB",
  twitter: "#16CDFD",
};

export const additionalColors = {
  // overlay: "#452a7a",
  // gold: "#FFC700",
  // silver: "#B2B2B2",
  // bronze: "#E7974D",

  //BS
  primaryHover: "#2E7AFF",
  primaryPress: "#004ACC",

  secondaryHover: "#FF506F",
  secondaryPress: "#E12446",

  successHover: "#38DC89",
  successPress: "#08B66D",

  warningHover: "#FEE560",
  warningPress: "#FFCD1C",

  boostHover: "#8E35FF",
  boostPress: "#6205D9",

  //---button additional colors
  btnTertiary: "rgba(18, 99, 241, 0.16)",

  btnTertiaryOut: "rgba(18, 99, 241, 0.16)",
  btnTertiaryOutPress: "rgba(18, 99, 241, 0.24)",

  btnLightOutBorder: "rgba(255, 255, 255, 0.24)",
  btnLightOutBgHover: "rgba(255, 255, 255, 0.24)",
  btnLightOutBgPress: "rgba(255, 255, 255, 0.32)",

  btnLight: "rgba(255, 255, 255, 0.24)",

  toggleBg: "rgba(116, 155, 216, 0.16);",

  //---Dark palette
  dark900: "#021127",
  dark800: "#07162D",
  dark700: "#071C3C",
  dark600: "#102648",
  dark500: "#1C3254",
  dark400: "#2A436A",
  dark300: "#3F5880",
  dark200: "#546F99",
  dark100: "#637FA9",

  //---LightPalette
  gray900: "#708DB7",
  gray800: "#83A0C9",
  gray700: "#9AB2D3",
  gray600: "#B5C6DE",
  gray500: "#C8D4E6",
  gray400: "#DFE7F2",
  gray300: "#E7EEF6",
  gray200: "#F2F6FC",
  gray100: "#F9FAFD",
};

export const badgeSpecialColors = {
  successOpacity: "rgba(29, 200, 114, 0.16)",
  secondaryOpacity: "rgba(249, 59, 93, 0.16)",
  primaryOpacity: "rgba(18, 99, 241, 0.16)",
  warningOpacity: "rgba(255, 205, 28, 0.16)",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  ...brandColors,
  ...badgeSpecialColors,
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  ...brandColors,
  ...badgeSpecialColors,
};
