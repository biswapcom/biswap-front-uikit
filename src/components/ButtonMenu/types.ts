import { ElementType, ReactElement, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";

export interface ButtonMenuItemProps extends BaseButtonMenuItemProps {
  isActive?: boolean;
}

export interface BaseButtonMenuItemProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | ElementType;
  external?: boolean;
  isLoading?: boolean;
  loadingTitle?: string;
  scale?: Scale;
  variant?: Variant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  flatBottom?: boolean;
  flatTop?: boolean;
  flat?: boolean;
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
  variant?: Variant;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  disabled?: boolean;
  children: ReactElement[];
  fullWidth?: boolean;
  flatBottom?: boolean;
  flatTop?: boolean;
  withoutBackground?: boolean;
}

//--------------

export const scales = {
  XL: "xl",
  LG: "lg",
  MD: "md",
  SM: "sm",
  XS: "xs",
} as const;

export const variants = {
  PRIMARY: "primary",
  WARNING: "warning",
  SELECT: "select",
  SELECT_LIGHT: "selectLight",
} as const;

export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];
