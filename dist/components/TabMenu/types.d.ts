import { SpaceProps } from "styled-system";
import { Dispatch, ElementType, SetStateAction, ReactElement, ReactNode } from "react";
import { PolymorphicComponentProps } from "../../util";
export interface TabBarProps extends SpaceProps {
    children: ReactElement[];
    variant?: typeof tabVariants.DARK | typeof tabVariants.LIGHT;
    activeIndex?: number;
    scale?: typeof tabsScales[keyof typeof tabsScales];
    disabled?: boolean;
    fullWidth?: boolean;
    menuIcons?: Array<string>;
    scrollX?: boolean;
    equalElementWidth?: boolean;
}
export interface TabBarItemProps {
    variant?: string;
    iconName?: string;
    iconColor?: string;
    isActive?: boolean;
    setWidth?: Dispatch<SetStateAction<any>>;
    itemIndex?: number;
    blockOffset?: number;
    onItemClick?: (index: number) => void;
    onClick?: () => void;
    as?: "a" | "button" | ElementType;
    scale?: typeof tabsScales[keyof typeof tabsScales];
    children?: ReactNode;
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
