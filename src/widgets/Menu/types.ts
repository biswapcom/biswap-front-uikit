import React, {
  ElementType,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from "react";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems";
import { Colors } from "../../theme";
import { DropdownMenuItemType } from "../../components/DropdownMenu/types";
import * as string_decoder from "string_decoder";

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
    FooterSocialLinks,
    FooterStatisticProps {
  buyBswHandler: () => void;
  linkComponent?: ElementType;
  banner?: (b?: (s: boolean) => void) => JSX.Element;
  links: Array<MenuItemsType>;
  subLinks: Array<SubMenuItemsType>;
  activeItem: string;
  activeSubItem: string;
  rightSide: FunctionComponent<{ isMobileMenuOpen?: boolean }>;
  bswPriceUsd?: number;
  buyBSWLabel: string;
  withEvent?: boolean;
  eventCallback?: () => void;
  children?: ReactNode;
  eventButtonLogo?: () => JSX.Element;
  customLogoSubtitle?: string;
  marketplaceLink?: string;
  baseAwsUrl?: string;
  buyBswLabel?: string;
  mobileLangSelector: FunctionComponent;
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

export interface FooterInfoLinks {
  title?: string;
  links?: Array<FooterNavItem>;
}

export interface FooterAboutLinks {
  aboutLinks: FooterInfoLinks;
}

export interface FooterProductLinks {
  productLinks: FooterInfoLinks;
}

export interface SocialLinks {
  title?: string;
  links?: any[];
}

export interface FooterSocialLinks {
  socialLinks: SocialLinks;
}

export interface FooterServiceLinks {
  serviceLinks: FooterInfoLinks;
}

export interface FooterLinks {
  footerLinks: FooterInfoLinks;
}

export interface FooterNavItem {
  label: string;
  href: string;
  target?: string;

  type?: DropdownMenuItemType;
}
