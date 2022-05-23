import { ElementType, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import type { PolymorphicComponentProps } from "../../util/polymorphic";

export const scales = {
  XL: "xl",
  LG: "lg",
  MD: "md",
  SM: "sm",
  XS: "xs",
} as const;

export const variants = {
  PRIMARY: "primary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning",
  BOOST: "boost",
  SELECT: "select",
  SELECT_LIGHT: "selectLight",

  LIGHT_OUT: "lightOut",
  LIGHT: "light",
  TERTIARY: "tertiary",
  TERTIARY_OUT: "tertiaryOut",
  TEXT: "text",
} as const;

export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | ElementType;
  external?: boolean;
  isLoading?: boolean;
  scale?: Scale;
  variant?: Variant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  flatBottom?: boolean;
  flatTop?: boolean;
  flat?: boolean;
}

export type ButtonProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, BaseButtonProps>;
