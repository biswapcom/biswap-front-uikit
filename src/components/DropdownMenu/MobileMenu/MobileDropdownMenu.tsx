import React, {FC, useEffect, useState} from "react";
import { Text } from "../../Text";
import { useMatchBreakpoints } from "../../../hooks";
import MobileMenu from "./MobileMenu";
import {MenuItemsProps, MenuItemsType} from "../../MenuItems/types";
import MenuItem from "../../MenuItem";
import Burger from "./ButtonBurger";

const MobileDropdownMenu: FC<MenuItemsProps> = ({
  items,
  activeItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [configItems, setConfigItems] = useState(items)

  useEffect(() => {
    const sortedItems = items.map(item => {
      if (item.isExtended) {
        item.items = item.items && item.items
          .filter((extendItem, index) => (index % 2) === 0)
          .concat(item.items.filter((extendItem, index) => (index % 2) === 1));
      }

      return item
    })

    if (isMobile) setConfigItems(sortedItems)
  }, [isMobile])

  return (
    <MobileMenu
      items={configItems}
      mobileMenuCallback={mobileMenuCallback}
      isMobileNav
      activeItem={activeItem}
    >
      <MenuItem>
        <Burger open={isMobileMenuOpened} />
        {!isMobile && (
          <Text ml="8px" fontWeight="600" color="white">
            Menu
          </Text>
        )}
      </MenuItem>
    </MobileMenu>
  );
};

export default MobileDropdownMenu;
