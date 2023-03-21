import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export type BadgeType = typeof badgeTypes[keyof typeof badgeTypes];

export interface BadgeButtonProps extends SpaceProps {
  fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  children: ReactNode;
  badgeType: BadgeType;
  onClick?: () => void;
  isActive?: boolean;
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
