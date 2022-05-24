import { ReactElement } from "react";
import { SpaceProps } from "styled-system";

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;
export const variants = {
  LIGHT: "light",
  DARK: "dark",
  TRANSPARENT: "transparent"
} as const;

export type Scales = typeof scales[keyof typeof scales];
export type Variants = typeof variants[keyof typeof variants];

export interface InputProps extends SpaceProps {
  scale?: Scales;
  variant?: Variants;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export interface InputGroupProps extends SpaceProps, InputProps {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: JSX.Element;
}
