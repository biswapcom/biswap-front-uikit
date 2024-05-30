import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare type Position = "top" | "bottom";
export declare type Variant = "dark" | "light" | "primary" | "secondary";
export declare type Scale = "lg" | "md" | "sm";
export interface PositionProps {
    position?: Position;
}
export interface DropdownButtonProps extends PositionProps, SpaceProps {
    maxWidth?: string;
    minWidth?: string;
    withIcon?: string;
    variant?: Variant;
    scale?: Scale;
    disabled?: boolean;
    options: Array<OptionProps>;
    onChange?: (option: OptionProps) => void;
    children?: ReactNode;
}
export interface OptionProps {
    label: string;
    value: number | string;
    icon?: {
        isAws?: boolean;
        name: string;
        color?: string;
    };
}
export declare enum SCALES {
    LG = "lg",
    MD = "md",
    SM = "sm"
}
export declare enum VARIANTS {
    DARK = "dark",
    LIGHT = "light",
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
