import { DefaultTheme } from "styled-components";
declare const getThemeValue: (path: string | number, fallback?: string | number) => (theme: DefaultTheme) => string;
export default getThemeValue;
