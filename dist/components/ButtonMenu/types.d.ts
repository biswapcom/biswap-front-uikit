import { ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { BaseButtonProps, Scale, Variant } from "../Button/types";
export interface ButtonMenuItemProps extends BaseButtonProps {
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
    withoutBackground?: boolean;
}
