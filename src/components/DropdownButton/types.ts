import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

// types
export type Position = "top" | "bottom";
export type Variant = "dark" | "light" | "primary" | "secondary";
export type Scale = "lg" | "md" | "sm";

export interface PositionProps {
  position?: Position;
}

export interface DropdownButtonProps extends PositionProps, SpaceProps {
  maxWidth?: string;
  minWidth?: string;
  withIcon?: string;
  variant?: Variant;
  scale?: Scale;
  disabled?: boolean;
  options: Array<OptionProps>;
  onChange?: (option: OptionProps) => void;
  children?: ReactNode;
  hideLabel?: boolean;
  dropDownWidth?: string;
  selectedItem?: OptionProps;
}

export interface OptionProps {
  label: string;
  value: number | string;
  icon?: {
    isAws?: boolean;
    name: string;
    color?: string;
  };
}

export enum SCALES {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export enum VARIANTS {
  DARK = "dark",
  LIGHT = "light",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
