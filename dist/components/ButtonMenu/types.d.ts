import { ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { BaseButtonProps } from "../Button/types";
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
    variant?: typeof menuVariants.PRIMARY | typeof menuVariants.WARNING | typeof menuVariants.SELECT | typeof menuVariants.SELECT_LIGHT;
    activeIndex?: number;
    onItemClick?: (index: number) => void;
    scale?: typeof menuScales[keyof typeof menuScales];
    disabled?: boolean;
    children: ReactElement[];
    fullWidth?: boolean;
}
