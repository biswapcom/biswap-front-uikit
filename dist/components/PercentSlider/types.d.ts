import { BoxProps } from "../Box";
export declare const scales: {
    readonly XL: "xl";
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly BOOST: "boost";
    readonly LIGHT_OUT: "lightOut";
    readonly LIGHT: "light";
    readonly TERTIARY: "tertiary";
    readonly TERTIARY_OUT: "tertiaryOut";
    readonly TEXT: "text";
    readonly TEXT_DARK: "textDark";
};
export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];
export interface PercentSliderProps extends BoxProps {
    name?: string;
    min?: number;
    max?: number;
    value: number;
    onValueChanged: (newValue: number) => void;
    disabled?: boolean;
    enableShortcuts?: boolean;
    shortcutCheckpoints?: Array<number>;
    shortcutScale?: Scale;
    shortcutVariant?: Variant;
    withTooltip?: boolean;
    bannerPosition?: "top" | "bottom";
    darkMode?: boolean;
    numberOfPoints?: number;
}
