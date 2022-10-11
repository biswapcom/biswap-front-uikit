import { Colors } from "../../theme";
import { ReactNode } from "react";
export declare type MenuItemVariant = "default" | "subMenu";
export interface MenuItemProps {
    isActive?: boolean;
    href?: string;
    variant?: MenuItemVariant;
    statusColor?: keyof Colors;
    children: ReactNode;
}
export declare type StyledMenuItemProps = {
    $isActive?: boolean;
    $variant?: MenuItemVariant;
    $statusColor?: keyof Colors;
};
