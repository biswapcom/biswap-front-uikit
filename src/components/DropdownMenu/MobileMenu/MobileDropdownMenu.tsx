import React, { FC, useState } from "react";
import IconComponent from "../../Svg/IconComponent";
import { Flex } from "../../Box";
import { Text } from "../../Text";
import { useMatchBreakpoints } from "../../../hooks";
import MobileMenu from "./MobileMenu";
import { MenuItemsProps } from "../../MenuItems/types";
import MenuItem from "../../MenuItem";
import Burger from "./ButtonBurger";

const MobileDropdownMenu: FC<MenuItemsProps> = ({
  items,
  activeItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
}) => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <MobileMenu
      items={items}
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
