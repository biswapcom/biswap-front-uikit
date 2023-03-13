export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xll: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
};

export type MarkerType = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
};

export type Gradients = {
  bubblegum: string;
  cardHeader: string;
  cardBlue: string;
};

export type Colors = {
  //Brand color
  binance: string;
  polygon: string;
  telegram: string;
  twitter: string;

  //BS ---------------------------
  //Base colors
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  boost: string;
  backgroundDark: string;
  backgroundLight: string;
  white: string;
  pastelBlue: string;
  tooltip: string;

  //BS Additional colors
  primaryHover: string;
  primaryPress: string;
  secondaryHover: string;
  secondaryPress: string;
  successHover: string;
  successPress: string;
  warningHover: string;
  warningPress: string;
  boostHover: string;
  boostPress: string;

  //Button additional colors
  btnTertiary: string;

  btnTertiaryOut: string;
  btnTertiaryOutPress: string;

  btnLightOutBorder: string;
  btnLightOutBgHover: string;
  btnLightOutBgPress: string;

  btnLight: string;

  toggleBg: string;

  //BS dark palette
  dark900: string;
  dark800: string;
  dark700: string;
  dark600: string;
  dark500: string;
  dark400: string;
  dark300: string;
  dark200: string;
  dark100: string;

  //BS light palette
  gray900: string;
  gray800: string;
  gray700: string;
  gray600: string;
  gray500: string;
  gray400: string;
  gray300: string;
  gray200: string;
  gray100: string;

  //badgeSpecialColors
  successOpacity: string;
  secondaryOpacity: string;
  primaryOpacity: string;
  warningOpacity: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
