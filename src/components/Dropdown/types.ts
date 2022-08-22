import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export type Position = "top" | "bottom";

export interface PositionProps {
  position?: Position;
}

export type Variant = typeof variants[keyof typeof variants];
export type Scale = typeof scales[keyof typeof scales];

export interface DropdownProps extends PositionProps, SpaceProps {
  maxWidth?: string;
  minWidth?: string;
  withIcon?: string;
  variant?: Variant;
  scale?: Scale;
  disabled?: boolean;
  options: Array<OptionProps>;
  onChange?: (option: OptionProps) => void;
  children: ReactNode,
}

export interface OptionProps {
  label: string;
  value: string;
  icon?: {
    name: string;
    color?: string;
  };
}

export const scales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
};

export const variants = {
  DARK: "dark",
  LIGHT: "light",
};
