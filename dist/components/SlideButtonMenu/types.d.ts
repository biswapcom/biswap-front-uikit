import { SpaceProps } from "styled-system";
import { BaseButtonProps } from "../Button/types";
import { Dispatch, SetStateAction } from "react";
export interface SlideButtonMenuItemProps extends BaseButtonProps {
    isActive?: boolean;
    setWidth: Dispatch<SetStateAction<any>>;
    blockOffset: number;
    itemIndex: number;
    children?: string;
    onAction: (index: number) => void;
    customClass?: string;
}
export declare const slideMenuScales: {
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
};
export declare const slideMenuVariants: {
    readonly PRIMARY: "primary";
    readonly WARNING: "warning";
    readonly SELECT: "select";
    readonly SELECT_LIGHT: "selectLight";
};
export interface SlideButtonMenuProps extends SpaceProps {
    variant?: typeof slideMenuVariants.PRIMARY | typeof slideMenuVariants.WARNING | typeof slideMenuVariants.SELECT | typeof slideMenuVariants.SELECT_LIGHT;
    activeIndex?: number;
    scale?: typeof slideMenuScales[keyof typeof slideMenuScales];
    disabled?: boolean;
    fullWidth?: boolean;
    menuTitles?: Array<string>;
    customClass?: string;
}
