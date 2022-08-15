import { Colors } from "../../theme";
import { ReactNode } from "react";

export type MenuItemVariant = "default" | "subMenu";

export interface MenuItemProps {
  isActive?: boolean;
  href?: string;
  variant?: MenuItemVariant;
  statusColor?: keyof Colors;
  children: ReactNode;
}

export type StyledMenuItemProps = {
  $isActive?: boolean;
  $variant?: MenuItemVariant;
  $statusColor?: keyof Colors;
};
