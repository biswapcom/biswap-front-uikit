import {BoxProps} from "../Box";
import {DropdownMenuItems} from "../DropdownMenu/types";

export const ItemTypes = {
  DIVIDER: 'DIVIDER',
} as const

type ItemType = typeof ItemTypes[keyof typeof ItemTypes]

export type MenuItemsType = {
  label?: string;
  href?: string;
  icon?: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
  isExtended?: boolean;
  isMobileNav?: boolean;
  type?: ItemType;
  target?: string
  mobileTarget?: string
  isMobileMenuOpened?: boolean;
  mobileMenuCallback?: (s: boolean) => void;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
  isMobileMenuOpened?: boolean;
  mobileMenuCallback?: (s: boolean) => void;
}
