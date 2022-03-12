import React, { ElementType } from "react";
import { Colors } from "../../theme";
import { BoxProps } from "../Box";

export interface DropdownMenuProps extends BoxProps {
  items?: DropdownMenuItems[];
  activeItem?: string;
  /**
   * As BottomNav styles
   */
  isBottomNav?: boolean;
  /**
   * Show items on mobile when `isBottomNav` is true
   */
  showItemsOnMobile?: boolean;
  index?: number;
  setMenuOpenByIndex?: React.Dispatch<
    React.SetStateAction<Record<number, boolean>>
  >;
}

export interface StyledDropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  isActive?: boolean;
}
export interface StyledDropdownMenuInnerLinkItemProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export interface InternalLink {
  label?: string;
  icon?: string;
  href?: string;
  fill?: string;
  linkType?: DropdownMenuItemType;
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
}

export enum DropdownMenuItemType {
  INTERNAL_LINK,
  EXTERNAL_LINK,
  BUTTON,
  DIVIDER,
  BANNER,
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
  extended?: boolean;
  bannerRenderer?: () => React.ReactNode;
}
