import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";

export type Variant = typeof variants[keyof typeof variants];
export type Scale = typeof scales[keyof typeof scales];

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  variant?: Variant;
  scale?: Scale;
  disabled?: boolean;
}

export const scales = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  NONE:'none'
}

export const variants = {
  LIGHT: "light",
  DARK: "dark",
  ICON: "icon",
} as const;