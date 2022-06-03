import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";
export declare type Variant = typeof variants[keyof typeof variants];
export declare type Scale = typeof scales[keyof typeof scales];
export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
    variant?: Variant;
    scale?: Scale;
    disabled?: boolean;
}
export declare const scales: {
    LG: string;
    MD: string;
    SM: string;
};
export declare const variants: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};
