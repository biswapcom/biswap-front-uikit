import { InputHTMLAttributes, ReactNode } from "react";
import { Colors } from "../../theme";
import { LayoutProps, SpaceProps } from "styled-system";
import {
  Scales as BodyTextScales,
  ScalesObj,
} from "../Typography/typesBodyText";

export const scales = {
  // SM: "sm",
  MD: "md",
  // LG: "lg",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface ToggleProps
  extends InputHTMLAttributes<HTMLInputElement>,
    SpaceProps {
  scale?: Scales;
  checked?: boolean;
  checkedColor?: keyof Colors;
  defaultColor?: keyof Colors;
  disabled?: boolean;
  label?: string;
  labelOrientation?: string;
  labelSize?: BodyTextScales | ScalesObj | undefined;
  gridArea?: string;
  variant?: string;
  spaceBetween?: boolean;
}

export interface HandleProps {
  scale: Scales;
  disabled?: boolean;
}

export interface InputProps {
  scale: Scales;
}

export interface StyleToggleProps {
  $checked: boolean;
  $checkedColor: keyof Colors;
  $defaultColor: keyof Colors;
  scale: Scales;
  disabled?: boolean;
}

export const scaleKeys = {
  handleHeight: "handleHeight",
  handleWidth: "handleWidth",
  handleLeft: "handleLeft",
  handleTop: "handleTop",
  checkedLeft: "checkedLeft",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
