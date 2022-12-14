/// <reference types="react" />
import { SpaceProps } from "styled-system";
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare const variants: {
    readonly LIGHT: "light";
    readonly LIGHT_WARNING: "lightWarning";
    readonly LIGHT_ERROR: "lightError";
    readonly DARK: "dark";
    readonly DARK_WARNING: "darkWarning";
    readonly DARK_ERROR: "darkError";
    readonly TRANSPARENT: "transparent";
};
export declare type Scales = typeof scales[keyof typeof scales];
export declare type Variants = typeof variants[keyof typeof variants];
export interface InputProps extends SpaceProps {
    scale?: Scales;
    variant?: Variants;
    isWarning?: boolean;
    isError?: boolean;
    maxWidth?: string;
    minWidth?: string;
}
export interface InputGroupProps extends SpaceProps, InputProps {
    disabled?: boolean;
    startIcon?: IconProps;
    endIcon?: IconProps;
    children: JSX.Element;
    description?: string;
}
interface IconProps {
    iconName: string;
    color?: string;
}
export {};
