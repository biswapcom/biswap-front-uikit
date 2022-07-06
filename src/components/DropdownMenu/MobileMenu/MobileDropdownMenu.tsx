import React, {FC, useEffect, useState} from "react";
import { Text } from "../../Text";
import { useMatchBreakpoints } from "../../../hooks";
import MobileMenu from "./MobileMenu";
import { MenuItemsProps } from "../../MenuItems/types";
import MenuItem from "../../MenuItem";
import Burger from "./ButtonBurger";
import {cloneDeep} from "lodash";

const MobileDropdownMenu: FC<MenuItemsProps> = ({
  items,
  activeItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
}) => {
  const { isXs, isSm } = useMatchBreakpoints();
  const isMobile = isXs || isSm

  const [configItems, setConfigItems] = useState(items)

  useEffect(() => {
    if (isXs || isSm) {
      const configMobile = cloneDeep(items)

      setConfigItems(configMobile.map(item => {
        if (item.isExtended) {
          item.items = item.items && item.items
          .filter((extendItem, index) => (index % 2) === 0)
          .concat(item.items.filter((extendItem, index) => (index % 2) === 1));
        }

        return item
      }))
    } else {
      setConfigItems(items)
    }
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
