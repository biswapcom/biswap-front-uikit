import { FlexProps } from "styled-system";
import { ReactNode, ReactElement } from "react";

export const variants = {
  DEFAULT: "default",
  WARNING: "warning",
  DANGER: "danger",
  PENDING: "pending",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface UserMenuProps extends FlexProps {
  account?: string;
  text?: ReactNode;
  avatarSrc?: string;
  variant?: Variant;
  disabled?: boolean;
  children?: (exposedProps: { isOpen: boolean }) => ReactElement;
}

export interface UserMenuItemProps {
  disabled?: boolean;
}
