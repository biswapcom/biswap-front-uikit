import { ElementType, ReactElement, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
export interface ButtonMenuItemProps extends BaseButtonMenuItemProps {
    isActive?: boolean;
}
export interface BaseButtonMenuItemProps extends LayoutProps, SpaceProps {
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
}
export declare const menuScales: {
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
};
export declare const menuVariants: {
    readonly PRIMARY: "primary";
    readonly WARNING: "warning";
    readonly SELECT: "select";
    readonly SELECT_LIGHT: "selectLight";
};
export interface ButtonMenuProps extends SpaceProps {
    variant?: Variant;
    activeIndex?: number;
    onItemClick?: (index: number) => void;
    scale?: Scale;
    disabled?: boolean;
    children: ReactElement[];
    fullWidth?: boolean;
    flatBottom?: boolean;
    flatTop?: boolean;
    withoutBackground?: boolean;
}
export declare const scales: {
    readonly XL: "xl";
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly WARNING: "warning";
    readonly SELECT: "select";
    readonly SELECT_LIGHT: "selectLight";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
