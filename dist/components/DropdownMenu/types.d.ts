import React, { ElementType } from "react";
import { Colors } from "../../theme";
import { BoxProps } from "../Box";
import { MenuItemsType } from "../MenuItems/types";
export interface MobileMenuProps {
    items: MenuItemsType[];
    mobileMenuCallback?: (s: boolean) => void;
    activeItem?: string;
    isMobileNav?: boolean;
}
export interface DropdownMenuProps extends BoxProps {
    items?: DropdownMenuItems[];
    mobileItems?: MenuItemsType[];
    activeItem?: string;
    /**
     * Show items on mobile
     */
    showItemsOnMobile?: boolean;
    index?: number;
    setMenuOpenByIndex?: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
    isExtended?: boolean;
    mobileMenuCallback?: (s: boolean) => void;
    isMobileNav?: boolean;
}
export interface StyledDropdownMenuItemProps extends React.ComponentPropsWithoutRef<"button"> {
    disabled?: boolean;
    isActive?: boolean;
}
export interface StyledDropdownMenuInnerLinkItemProps extends React.ComponentPropsWithoutRef<"div"> {
}
export interface InternalLink {
    label?: string;
    icon?: string;
    href?: string;
    fill?: string;
    linkType?: DropdownMenuItemType;
    target?: string;
    mobileTarget?: string;
}
export interface InnerLinksBlockProps {
    links: InternalLink[];
    leftIcon?: string;
    setIsOpen: (o: boolean) => void;
    linkComponent: ElementType;
}
export interface MenuItemContentProps {
    leftIcon?: string;
    label?: string | React.ReactNode;
    description?: string;
    status?: LinkStatus;
    rightIcon?: string;
    fill?: string;
    badgeType?: string;
    badgeTitle?: string;
}
export declare enum DropdownMenuItemType {
    INTERNAL_LINK = 0,
    EXTERNAL_LINK = 1,
    BUTTON = 2,
    DIVIDER = 3,
    BANNER = 4,
    CONTAINER = 5
}
export interface LinkStatus {
    text: string;
    color: keyof Colors;
}
export interface DropdownMenuItems {
    label?: string | React.ReactNode;
    href?: string;
    text?: string;
    onClick?: () => void;
    type?: DropdownMenuItemType;
    status?: LinkStatus;
    disabled?: boolean;
    iconName?: string;
    isMobileOnly?: boolean;
    leftIcon?: string;
    leftIconFill?: string;
    rightIcon?: string;
    rightIconFill?: string;
    description?: string;
    links?: InternalLink[];
    bannerRenderer?: (h?: string, t?: string) => React.ReactNode;
    target?: string;
    mobileTarget?: string;
    badgeType?: string;
    badgeTitle?: string;
}
export interface DropdownMenuItemContainerProps extends DropdownMenuItems {
    isActive?: boolean;
    getMenuItemContent: (i: string) => React.ReactNode;
    linkComponent: React.ElementType;
    setIsOpen: (s: boolean) => void;
}
