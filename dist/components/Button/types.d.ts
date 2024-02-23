import { ElementType, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import type { PolymorphicComponentProps } from "../../util";
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
export interface BaseButtonProps extends LayoutProps, SpaceProps {
    as?: "a" | "button" | ElementType;
    external?: boolean;
    isLoading?: boolean;
    loadingTitle?: string;
    scale?: Scale;
    variant?: Variant;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    flatBottom?: boolean;
    flatTop?: boolean;
    flat?: boolean;
    addBubble?: boolean;
    bubbleColor?: string;
}
export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
