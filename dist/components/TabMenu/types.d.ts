import { SpaceProps } from "styled-system";
import { BaseButtonProps } from "../Button";
import { Dispatch, SetStateAction } from "react";
export interface TabBarItemProps extends BaseButtonProps {
    isActive?: boolean;
    customClass?: string;
    setWidth: Dispatch<SetStateAction<any>>;
    itemIndex: number;
    children?: string;
    onAction: (index: number) => void;
}
export declare const tabsScales: {
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
};
export declare const tabVariants: {
    readonly TAB: "select";
    readonly TAB_LIGHT: "selectLight";
};
export interface TabBarProps extends SpaceProps {
    variant?: typeof tabVariants.TAB | typeof tabVariants.TAB_LIGHT;
    activeIndex?: number;
    scale?: typeof tabsScales[keyof typeof tabsScales];
    disabled?: boolean;
    fullWidth?: boolean;
    menuTitles?: Array<string>;
    customClass?: string;
    isLight?: boolean;
}
