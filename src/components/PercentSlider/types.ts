import { BoxProps } from "../Box";

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
  LIGHT_OUT: "lightOut",
  LIGHT: "light",
  TERTIARY: "tertiary",
  TERTIARY_OUT: "tertiaryOut",
  TEXT: "text",
  TEXT_DARK: "textDark",
} as const;

export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];

export interface PercentSliderProps extends BoxProps {
  name?: string;
  min?: number;
  max?: number;
  value: number;
  onValueChanged: (newValue: number) => void;
  disabled?: boolean;
  enableShortcuts?: boolean;
  shortcutCheckpoints?: Array<number>;
  shortcutScale?: Scale;
  shortcutVariant?: Variant;
  withTooltip?: boolean;
  bannerPosition?: "top" | "bottom";
  darkMode?: boolean;
  numberOfPoints?: number;
}
