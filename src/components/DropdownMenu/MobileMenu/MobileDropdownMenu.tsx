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

  let mobileConfig: MenuItemsType[] = []

  useEffect(() => {
    const config = items
    mobileConfig = config.map(item => {
      if (item.isExtended) {
        item.items = item.items && item.items
          .filter((extendItem, index) => (index % 2) === 0)
          .concat(item.items.filter((extendItem, index) => (index % 2) === 1));
      }

      return item
    })
  }, [])

  return (
    <MobileMenu
      items={isMobile ? mobileConfig : items}
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
