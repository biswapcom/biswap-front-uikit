import { darkColors, lightColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors.tooltip,
  text: darkColors.white,
};

export const dark: TooltipTheme = {
  background: lightColors.tooltip,
  text: lightColors.white,
};
