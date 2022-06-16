import { SpaceProps } from "styled-system";
import { Dispatch, ElementType, SetStateAction } from "react";
import { PolymorphicComponentProps } from "../../util/polymorphic";

export interface SlideButtonMenuProps extends SpaceProps {
  variant?: typeof slideMenuVariants.DARK | typeof slideMenuVariants.LIGHT;
  activeIndex?: number;
  scale?: typeof slideMenuScales[keyof typeof slideMenuScales];
  disabled?: boolean;
  fullWidth?: boolean;
  menuTitles?: Array<string>;
  customClass?: string;
}

export interface SlideButtonMenuItemProps extends SlideButtonMenuProps {
  isActive?: boolean;
  setWidth?: Dispatch<SetStateAction<any>>;
  blockOffset?: number;
  itemIndex?: number;
  onAction?: (index: number) => void;
}

export type SlideButtonProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, SlideButtonMenuItemProps>;

export const slideMenuScales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export const slideMenuVariants = {
  DARK: "dark",
  LIGHT: "light",
} as const;
