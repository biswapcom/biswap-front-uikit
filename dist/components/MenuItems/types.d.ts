import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";
import { Colors } from "../../theme";
export declare const ItemTypes: {
    readonly DIVIDER: "DIVIDER";
};
declare type ItemType = typeof ItemTypes[keyof typeof ItemTypes];
export declare type MenuItemsType = {
    label?: string;
    href?: string;
    icon?: string;
    items?: DropdownMenuItems[];
    showOnMobile?: boolean;
    showItemsOnMobile?: boolean;
    isExtended?: boolean;
    isMobileNav?: boolean;
    type?: ItemType;
    target?: string;
    mobileTarget?: string;
    isMobileMenuOpened?: boolean;
    mobileMenuCallback?: (s: boolean) => void;
    hidden?: boolean;
    showNavBadge?: boolean;
    colorNavBadge?: keyof Colors;
    highlightTitle?: boolean;
};
export interface MenuItemsProps extends BoxProps {
    items: MenuItemsType[];
    activeItem?: string;
    activeSubItem?: string;
    isMobileMenuOpened?: boolean;
    mobileMenuCallback?: (s: boolean) => void;
    baseAwsUrl: string;
}
export {};
