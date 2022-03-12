import { ReactElement } from "react";
import { SpaceProps } from "styled-system";

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;
export const styleColor = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Scales = typeof scales[keyof typeof scales];
export type StyleColors = typeof styleColor[keyof typeof styleColor];

export interface InputProps extends SpaceProps {
  scale?: Scales;
  styleColor?: StyleColors;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export interface InputGroupProps extends SpaceProps {
  scale?: Scales;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: JSX.Element;
}
