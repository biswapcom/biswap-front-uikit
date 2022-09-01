import { DefaultTheme } from "styled-components";
import getThemeValue from "./getThemeValue";

const getRgba = (color: string, theme: DefaultTheme, alpha?: number) => {
  const hexRegEx = /^#[0-9A-F]{6}$/i;

  const hex = hexRegEx.test(color)
    ? color
    : getThemeValue(`colors.${color}`, color)(theme);

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgba(${r}, ${g}, ${b})`;
};

export default getRgba;
