import { ReactElement } from "react";
import { SpaceProps } from "styled-system";

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;
export const variants = {
  LIGHT: "light",
  LIGHT_WARNING: "lightWarning",
  LIGHT_ERROR: "lightError",
  DARK: "dark",
  DARK_WARNING: "darkWarning",
  DARK_ERROR: "darkError",
  TRANSPARENT: "transparent",
} as const;

export type Scales = typeof scales[keyof typeof scales];
export type Variants = typeof variants[keyof typeof variants];

export interface InputProps extends SpaceProps {
  scale?: Scales;
  variant?: Variants;
  isWarning?: boolean;
  isError?: boolean;
  maxWidth?: string;
  minWidth?: string;
}

export interface InputGroupProps extends SpaceProps, InputProps {
  disabled?: boolean;
  startIcon?: IconProps;
  endIcon?: IconProps;
  children: JSX.Element;
}

interface IconProps {
  iconName: string;
  color?: string;
}
