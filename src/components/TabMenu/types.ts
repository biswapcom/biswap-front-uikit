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
  blockOffset: number;
}

export const tabsScales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export const tabVariants = {
  TAB: "select",
  TAB_LIGHT: "selectLight",
} as const;

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
