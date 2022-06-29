import { SpaceProps } from "styled-system";
import { Dispatch, ElementType, SetStateAction } from "react";
import { PolymorphicComponentProps } from "../../util/polymorphic";
export interface TabBarProps extends SpaceProps {
    variant?: typeof tabVariants.DARK | typeof tabVariants.LIGHT;
    activeIndex?: number;
    scale?: typeof tabsScales[keyof typeof tabsScales];
    disabled?: boolean;
    fullWidth?: boolean;
    menuTitles?: Array<string>;
    customClass?: string;
    isLight?: boolean;
}
export interface TabBarItemProps extends TabBarProps {
    isActive?: boolean;
    setWidth?: Dispatch<SetStateAction<any>>;
    itemIndex?: number;
    children?: string;
    onAction?: (index: number) => void;
    blockOffset?: number;
}
export declare type TabProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, TabBarItemProps>;
export declare const tabsScales: {
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
};
export declare const tabVariants: {
    readonly DARK: "dark";
    readonly LIGHT: "light";
};
