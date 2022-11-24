import { ReactNode } from "react";
import { Colors } from "../../theme";
export declare type MenuItemVariant = "default" | "subMenu";
export interface MenuItemProps {
    isActive?: boolean;
    href?: string;
    variant?: MenuItemVariant;
    statusColor?: keyof Colors;
    highlightTitle?: boolean;
    children: ReactNode;
}
export declare type StyledMenuItemProps = {
    $isActive?: boolean;
    $variant?: MenuItemVariant;
    $statusColor?: keyof Colors;
    highlightTitle?: boolean;
};
