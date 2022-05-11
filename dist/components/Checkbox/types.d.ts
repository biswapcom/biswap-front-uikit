export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface CheckboxProps {
    scale?: Scales;
    labelOrientation?: string;
    label?: string;
    colorVariant?: string;
    id?: string;
    defaultChecked?: boolean;
}
