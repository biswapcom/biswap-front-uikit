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

export type TabProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, TabBarItemProps>;

export const tabsScales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export const tabVariants = {
  DARK: "dark",
  LIGHT: "light",
} as const;
