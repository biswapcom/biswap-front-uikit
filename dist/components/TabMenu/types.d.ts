import { SpaceProps } from "styled-system";
import { BaseButtonProps } from "../Button";
export interface TabBarItemProps extends BaseButtonProps {
    isActive?: boolean;
    setWidth?: any;
    itemIndex?: number;
    children?: any;
    onAction: any;
    customClass?: string;
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
    onItemClick?: (index: number) => void;
    scale?: typeof tabsScales[keyof typeof tabsScales];
    disabled?: boolean;
    fullWidth?: boolean;
    menuTitles?: Array<string>;
    customClass?: string;
    isLight?: boolean;
}
