import { SpaceProps } from "styled-system";
export type RadioTheme = {
    handleBackground: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export type Scales = typeof scales[keyof typeof scales];
export interface RadioProps extends SpaceProps {
    scale?: Scales;
    labelOrientation?: string;
    label?: string;
    radioName?: string;
    onChange: any;
    colorVariant?: string;
    checked?: boolean;
}
