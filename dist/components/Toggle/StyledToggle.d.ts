import { HandleProps, InputProps, StyleToggleProps } from "./types";
export declare const ToggleWrap: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {
    labelOrientation?: string | undefined;
    disabled?: boolean | undefined;
    gridArea?: string | undefined;
}, never>;
export declare const Handle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, HandleProps, never>;
export declare const Label: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
    labelOrientation?: string | undefined;
    isChecked: boolean;
    disabled?: boolean | undefined;
    variant?: string | undefined;
}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputProps, never>;
declare const StyledToggle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleToggleProps, never>;
export default StyledToggle;
