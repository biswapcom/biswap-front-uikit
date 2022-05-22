import { Colors } from "./types";

export const baseColors = {
  failure: "#F93B5D",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  dark: "#102648",

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
  twitter: "#1DA1F2",
};

export const additionalColors = {
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",

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

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  header: "#071C3C",
  contrast: "#ffffff",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#E5EAF2",
  inputSecondary: "#d7caec",
  tertiary: "#E4EFFF",
  text: "#452A7A",
  disabled: "#E9EAEB",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  dropDown: "#F6F6F6",
  footer: "#FFFFFF",
  cardBorder: "#ffffff",
  dropdown: "#ffffff",
  dropdownDeep: "#ffffff",
  backgroundAlt: "#ffffff",
  backgroundAlt2: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  ...brandColors,
  header: "#071C3C",
  background: "#07162D",
  backgroundDisabled: "#C8D4E6",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#021127",
  inputBorder: "#1C3254",
  inputSecondary: "#0E3382",
  primaryDark: "#0098A1",
  tertiary: "#E4EFFF",
  text: "#708DB7",
  disabled: "#F2F6FC",
  textDisabled: "#708DB7",
  textSubtle: "#749BD8",
  borderColor: "#524B63",
  card: "#102648",
  dropDown: "#1C3254",
  footer: "#0C1F3C",
  cardBorder: "#ffffff",
  dropdown: "#ffffff",
  dropdownDeep: "#ffffff",
  backgroundAlt: "#ffffff",
  backgroundAlt2: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  },
};
