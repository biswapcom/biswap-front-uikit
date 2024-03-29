import { InputHTMLAttributes } from "react";
import { Colors } from "../../theme";
import { SpaceProps } from "styled-system";
import { Scales as BodyTextScales, ScalesObj } from "../Typography/typesBodyText";
export declare const scales: {
    readonly MD: "md";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement>, SpaceProps {
    scale?: Scales;
    checked?: boolean;
    checkedColor?: keyof Colors;
    defaultColor?: keyof Colors;
    disabled?: boolean;
    label?: string;
    labelOrientation?: string;
    labelSize?: BodyTextScales | ScalesObj | undefined;
    gridArea?: string;
    variant?: string;
    spaceBetween?: boolean;
}
export interface HandleProps {
    scale: Scales;
    disabled?: boolean;
}
export interface InputProps {
    scale: Scales;
}
export interface StyleToggleProps {
    $checked: boolean;
    $checkedColor: keyof Colors;
    $defaultColor: keyof Colors;
    scale: Scales;
    disabled?: boolean;
}
export declare const scaleKeys: {
    readonly handleHeight: "handleHeight";
    readonly handleWidth: "handleWidth";
    readonly handleLeft: "handleLeft";
    readonly handleTop: "handleTop";
    readonly checkedLeft: "checkedLeft";
    readonly toggleHeight: "toggleHeight";
    readonly toggleWidth: "toggleWidth";
};
export declare type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
