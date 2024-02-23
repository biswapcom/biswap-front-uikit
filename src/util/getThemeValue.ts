import get from "lodash/get";
import { DefaultTheme } from "styled-components";

const getThemeValue =
  (path: string | number, fallback?: string | number) =>
  (theme: DefaultTheme): string =>
    get(theme, path, fallback);

export default getThemeValue;
