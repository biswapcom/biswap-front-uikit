import React, { FC, useState } from "react";
import IconComponent from "../../Svg/IconComponent";
import { Flex } from "../../Box";
import { Text } from "../../Text";
import { useMatchBreakpoints } from "../../../hooks";
import MobileMenu from "./MobileMenu";
import { MenuItemsProps } from "../../MenuItems/types";
import MenuItem from "../../MenuItem";

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
        <IconComponent
          iconName={isMobileMenuOpened ? "ButtonMenuOpened" : "ButtonMenu"}
          color={isMobileMenuOpened && isMobile ? "backgroundDark" : "white"}
        />
        {!isMobile && (
          <Text ml="8px" color="white">
            Menu
          </Text>
        )}
      </MenuItem>
    </MobileMenu>
  );
};

export default MobileDropdownMenu;
