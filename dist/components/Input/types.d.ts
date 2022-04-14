import { ReactElement } from "react";
import { SpaceProps } from "styled-system";
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare const styleColor: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};
export declare type Scales = typeof scales[keyof typeof scales];
export declare type StyleColors = typeof styleColor[keyof typeof styleColor];
export interface InputProps extends SpaceProps {
    scale?: Scales;
    styleColor?: StyleColors;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export interface InputGroupProps extends SpaceProps {
    scale?: Scales;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    children: JSX.Element;
}
