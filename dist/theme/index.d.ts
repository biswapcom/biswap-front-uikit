import { AlertTheme } from "../components/Alert/types";
import { RadioTheme } from "../components/Radio/types";
import { ToggleTheme } from "../components/Toggle/theme";
import { NavThemeType } from "../widgets/Menu/theme";
import { ModalTheme } from "../widgets/Modal/types";
import { Breakpoints, Colors, MediaQueries, Spacing, ZIndices } from "./types";
export interface BiswapTheme {
    siteWidth: number;
    isDark: boolean;
    alert: AlertTheme;
    colors: Colors;
    nav: NavThemeType;
    modal: ModalTheme;
    radio: RadioTheme;
    toggle: ToggleTheme;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    zIndices: ZIndices;
}
export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";
