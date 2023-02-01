import { ElementType, ReactElement, ReactNode } from "react";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems";
import { Colors } from "../../theme";
import { DropdownMenuItemType } from "../../components/DropdownMenu/types";
export interface LinkStatus {
    text: string;
    color: keyof Colors;
}
export interface NavProps extends BSWPriceProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks, ConnectMetaProps, FooterStatisticProps {
    buyBswHandler: () => void;
    linkComponent?: ElementType;
    banner?: ReactElement;
    links: Array<MenuItemsType>;
    subLinks: Array<SubMenuItemsType>;
    activeItem: string;
    activeSubItem: string;
    rightSide: ReactNode;
    bswPriceUsd?: number;
    buyBSWLabel: string;
    withEvent?: boolean;
    eventCallback?: () => void;
    children?: ReactNode;
    eventButtonLogo?: () => JSX.Element;
    customLogoSubtitle?: string;
}
export interface FooterStatisticProps {
    footerStatistic: Array<FooterStatisticItem>;
}
export interface FooterStatisticItem {
    label: string;
    value: number | string;
}
export interface ConnectMetaProps {
    registerToken: () => void;
}
export interface BSWPriceProps {
    BSWPriceLabel: string;
    BSWPriceValue: number;
}
export interface FooterAboutLinks {
    aboutLinks: Array<FooterNavItem>;
}
export interface FooterProductLinks {
    productLinks: Array<FooterNavItem>;
}
export interface FooterServiceLinks {
    serviceLinks: Array<FooterNavItem>;
}
export interface FooterLinks {
    footerLinks: Array<FooterNavItem>;
}
export interface FooterNavItem {
    label: string;
    href: string;
    target?: string;
    type?: DropdownMenuItemType;
}
