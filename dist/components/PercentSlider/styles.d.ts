import { InputHTMLAttributes } from "react";
interface DisabledProp {
    disabled?: boolean;
}
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputHTMLAttributes<HTMLInputElement>, never>;
export declare const BarBackground: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DisabledProp, never>;
export declare const BarProgress: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DisabledProp, never>;
export declare const PointsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Box").BoxProps & import("../Box").FlexProps, never>;
export {};
