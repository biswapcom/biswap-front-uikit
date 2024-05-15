import { BodyTextProps } from "./typesBodyText";
interface scalesMap {
    [x: string]: {
        fontSize: string;
        lineHeight: string;
    };
}
export declare const bodyTextScaleMap: scalesMap;
export declare const BodyText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, (import("../Text").TextProps & {
    as: string;
} & ({
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: (string | null)[];
    lineHeight: (string | null)[];
})) & BodyTextProps, "fontSize" | "as" | "lineHeight">;
export {};
