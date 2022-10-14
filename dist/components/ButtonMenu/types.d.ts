import { Dispatch, ElementType, ReactElement, ReactNode, RefObject, SetStateAction } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
export interface ButtonMenuItemProps extends BaseButtonMenuItemProps {
    isActive?: boolean;
    setWidth?: Dispatch<SetStateAction<any>>;
    itemIndex?: number;
    blockOffset?: number;
    elementRef?: RefObject<HTMLButtonElement>;
    onItemClick?: (index: number) => void;
    onClick?: () => void;
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
    isActive?: boolean;
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
    scrollX?: boolean;
    equalElementWidth?: boolean;
    withoutAnimation?: boolean;
}
export declare const scales: {
    readonly XL: "xl";
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};
export declare const variants: {
    readonly DARK: "dark";
    readonly LIGHT: "light";
    readonly WARNING_LIGHT: "warningLight";
    readonly WARNING_DARK: "warningDark";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
export declare type ColorKey = "pastelBlue" | "gray900";
export declare type HoverKey = "white" | "dark800";
