import { DefaultTheme } from "styled-components";
declare const getThemeValue: (path: string, fallback?: string | number) => (theme: DefaultTheme) => string;
export default getThemeValue;
