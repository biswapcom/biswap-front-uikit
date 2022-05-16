import { SpaceProps } from "styled-system";
import {BaseButtonProps} from "../Button";

export interface TabBarItemProps extends BaseButtonProps {
  isActive?: boolean;
  setWidth?: any;
  itemIndex?: number;
  children?: any
  onAction: any
  customClass?: string
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
  onItemClick?: (index: number) => void;
  scale?: typeof tabsScales[keyof typeof tabsScales];
  disabled?: boolean;
  fullWidth?: boolean;
  menuTitles?: Array<string>
  customClass?: string
  isLight?: boolean
}
