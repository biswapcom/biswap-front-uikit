import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";

export enum MenuItemType {
  DIVIDER,
}

export type MenuItemsType = {
  label?: string;
  href?: string;
  icon?: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
  isExtended?: boolean;
  isMobileNav?: boolean;
  type?: MenuItemType;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}
