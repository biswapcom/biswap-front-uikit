import { ReactNode } from "react";
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
    | "warningOpacity"
    | string;
  fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  isLarge?: boolean;
  children: ReactNode;
}

export const badgeTypes = {
  SUCCESS: "success",
  ERROR: "error",
  ACTIVE: "active",
  NOT_ACTIVE: "notActive",
  PRIMARY: "primary",
  WARNING: "warning",
  CORE: "core",
  LIGHT: "light",
  BOOST: "boost",
  WARNING_OPACITY: "warningOpacity",
};
