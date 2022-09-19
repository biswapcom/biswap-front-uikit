import { ReactNode } from 'react'
import { SpaceProps } from "styled-system";

export interface BadgeProps extends SpaceProps {
  badgeType:
    | "success"
    | "error"
    | "active"
    | "notActive"
    | "primary"
    | "warning"
    | "core"
    | "light"
    | string;
  fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  isLarge?: boolean;
  children: ReactNode;
}
