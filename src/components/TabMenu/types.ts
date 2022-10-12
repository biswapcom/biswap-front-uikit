import { SpaceProps } from "styled-system";
import {
  Dispatch,
  ElementType,
  SetStateAction,
  ReactElement,
  ReactNode,
} from "react";
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
  onClick?: any;
  as?: "a" | "button" | ElementType;
  scale?: typeof tabsScales[keyof typeof tabsScales];
  children?: ReactNode;
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
