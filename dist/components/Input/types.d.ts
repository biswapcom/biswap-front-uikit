import { ReactElement } from "react";
import { SpaceProps } from "styled-system";
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare const variants: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};
export declare type Scales = typeof scales[keyof typeof scales];
export declare type Variants = typeof variants[keyof typeof variants];
export interface InputProps extends SpaceProps {
    scale?: Scales;
    variant?: Variants;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export interface InputGroupProps extends SpaceProps, InputProps {
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    children: JSX.Element;
}
