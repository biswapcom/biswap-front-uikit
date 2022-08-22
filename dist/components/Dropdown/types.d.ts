import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare type Position = "top" | "bottom";
export interface PositionProps {
    position?: Position;
}
export declare type Variant = typeof variants[keyof typeof variants];
export declare type Scale = typeof scales[keyof typeof scales];
export interface DropdownProps extends PositionProps, SpaceProps {
    maxWidth?: string;
    minWidth?: string;
    withIcon?: string;
    variant?: Variant;
    scale?: Scale;
    disabled?: boolean;
    options: Array<OptionProps>;
    onChange?: (option: OptionProps) => void;
    children: ReactNode;
}
export interface OptionProps {
    label: string;
    value: string;
    icon?: {
        name: string;
        color?: string;
    };
}
export declare const scales: {
    LG: string;
    MD: string;
    SM: string;
};
export declare const variants: {
    DARK: string;
    LIGHT: string;
};
