import { ElementType, ReactElement, ReactNode } from "react";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems";
import { Colors } from "../../theme";

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface NavProps
  extends BSWPriceProps,
    FooterAboutLinks,
    FooterProductLinks,
    FooterServiceLinks,
    ConnectMetaProps,
    FooterStatisticProps {
  buyBswLink: string;
  //networkChangeToBSC?: any;
  //networkChangeToAvalanche?: any;
  //currentNetwork?: any;
  //account?: string;
  //login: Login;
  //profile?: Profile;
  //logout: () => void;
  //---------
  linkComponent?: ElementType;
  //userMenu?: ReactElement;
  banner?: ReactElement;
  //globalMenu?: ReactElement;
  links: Array<MenuItemsType>;
  subLinks: Array<SubMenuItemsType>;
  activeItem: string;
  activeSubItem: string;
  rightSide: ReactNode;
  //isDark: boolean;
  //toggleTheme: (isDark: boolean) => void;
 // cakePriceUsd?: number;
  bswPriceUsd?: number;
  //currentLang: string;
  buyBSWLabel: string;
  //setLang: (lang: Language) => void;
  //pendingTransactions?: number;
  //recentTransaction?: any;
  //chainId?: any;
  //clearTransaction?: any;
  //isSwap?: boolean;
  //transactionsForUIKit?: any;
  //---------
  withEvent?: boolean;
  eventCallback?: () => void;
  //children?: React.PropsWithChildren;
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

export interface FooterNavItem {
  label: string;
  href: string;
  target?: string;
}
