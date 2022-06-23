import { ElementType, ReactElement } from "react";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";
import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";
export interface Language {
    code: string;
    language: string;
    locale: string;
}
export interface Profile {
    username?: string;
    image?: string;
    profileLink: string;
    noProfileLink: string;
    showPip?: boolean;
}
export interface LinkStatus {
    text: string;
    color: keyof Colors;
}
export interface NavProps extends BSWPriceProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks, ConnectMetaProps, FooterStatisticProps {
    buyBswLink: string;
    networkChangeToBSC?: any;
    networkChangeToAvalanche?: any;
    currentNetwork?: any;
    account?: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
    linkComponent?: ElementType;
    userMenu?: ReactElement;
    banner?: ReactElement;
    globalMenu?: ReactElement;
    links: Array<MenuItemsType>;
    subLinks: Array<SubMenuItemsType>;
    activeItem: string;
    activeSubItem: string;
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    cakePriceUsd?: number;
    currentLang: string;
    buyCakeLabel: string;
    setLang: (lang: Language) => void;
    pendingTransactions?: number;
    recentTransaction?: any;
    chainId?: any;
    clearTransaction?: any;
    isSwap?: boolean;
    transactionsForUIKit?: any;
    withEvent?: boolean;
    eventCallback?: () => void;
    handleLogoClick: any;
}
export interface FooterStatisticProps {
    footerStatistic: Array<FooterStatisticItem>;
}
export interface FooterStatisticItem {
    label: string;
    value: number | string;
}
export interface ConnectMetaProps {
    onClick: () => void;
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
export interface FooterNavItem {
    label: string;
    href: string;
    target?: string;
}
