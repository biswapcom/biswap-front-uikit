import {ReactElement} from "react";
import { SpaceProps } from "styled-system";
import {BaseButtonProps} from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export const menuScales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export const menuVariants = {
  PRIMARY: "primary",
  WARNING: "warning",
  SELECT: "select",
  SELECT_LIGHT: "selectLight",
} as const;

export interface ButtonMenuProps extends SpaceProps {
  variant?: typeof menuVariants.PRIMARY | typeof menuVariants.WARNING | typeof menuVariants.SELECT | typeof menuVariants.SELECT_LIGHT;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: typeof menuScales[keyof typeof menuScales];
  disabled?: boolean;
  children: ReactElement[];
  fullWidth?: boolean;
}
