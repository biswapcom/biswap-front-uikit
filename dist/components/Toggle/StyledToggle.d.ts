import { HandleProps, InputProps, StyleToggleProps } from "./types";
import { SpaceProps } from "styled-system";
interface IToggleProps extends SpaceProps {
    labelOrientation?: string;
    disabled?: boolean;
    gridArea?: string;
    spaceBetween?: boolean;
    labelSize?: string;
}
export declare const ToggleWrap: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, IToggleProps, never>;
export declare const Handle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, HandleProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ((import("../Text").TextProps & ({
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: (string | null)[];
    lineHeight: (string | null)[];
})) & import("../Typography").BodyTextProps) & {
    labelOrientation?: string | undefined;
    isChecked: boolean;
    disabled?: boolean | undefined;
    variant?: string | undefined;
}, "fontSize" | "lineHeight">;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputProps, never>;
declare const StyledToggle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleToggleProps, never>;
export default StyledToggle;
