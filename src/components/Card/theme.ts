import { darkColors, lightColors } from "../../theme";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.white,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: 'linear-gradient(180deg, #071C3C 0%, #002B6F 100%)',
    blue: 'linear-gradient(180deg, #071C3C 0%, #002B6F 100%)',
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    violet: 'linear-gradient(180deg, #071C3C 0%, #002B6F 100%)',
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.white,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: 'linear-gradient(180deg, #071C3C 0%, #002B6F 100%)',
    blue: 'linear-gradient(180deg, #071C3C 0%, #002B6F 100%)',
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    violet: 'linear-gradient(180deg, #071C3C 0%, #002B6F 100%)',
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
