import { SpaceProps } from "styled-system";
import {BaseButtonProps} from "../Button/types";

export interface SlideButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
  setWidth?: any;
  itemIndex?: number;
  children?: any
  onAction: any
  customClass?: string
}

export const slideMenuScales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export const slideMenuVariants = {
  PRIMARY: "primary",
  WARNING: "warning",
  SELECT: "select",
  SELECT_LIGHT: "selectLight",
} as const;

export interface SlideButtonMenuProps extends SpaceProps {
  variant?: typeof slideMenuVariants.PRIMARY | typeof slideMenuVariants.WARNING | typeof slideMenuVariants.SELECT | typeof slideMenuVariants.SELECT_LIGHT;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: typeof slideMenuScales[keyof typeof slideMenuScales];
  disabled?: boolean;
  // children?: ReactElement[];
  fullWidth?: boolean;
  menuTitles?: Array<string>
  customClass?: string
}
