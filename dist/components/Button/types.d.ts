import { ElementType, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import type { PolymorphicComponentProps } from "../../util/polymorphic";
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
    readonly SELECT: "select";
    readonly SELECT_LIGHT: "selectLight";
    readonly LIGHT_OUT: "LightOut";
    readonly LIGHT: "light";
    readonly TERTIARY: "tertiary";
    readonly TERTIARY_OUT: "tertiaryOut";
    readonly TEXT: "text";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
export interface BaseButtonProps extends LayoutProps, SpaceProps {
    as?: "a" | "button" | ElementType;
    external?: boolean;
    isLoading?: boolean;
    scale?: Scale;
    variant?: Variant;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    flatBottom?: boolean;
    flatTop?: boolean;
    flat?: boolean;
}
export declare type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
