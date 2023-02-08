import React, { FC, useEffect, useState } from "react";
import { cloneDeep } from "lodash";

import { Text } from "../../Text";
import { useMatchBreakpoints } from "../../../contexts";
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
  const { isMobile, isDesktop } = useMatchBreakpoints();

  const [configItems, setConfigItems] = useState(items);

  useEffect(() => {
    console.log("LOOP")
    if (isMobile) {
      const configMobile = cloneDeep(items);

      setConfigItems(
        configMobile.map((item) => {
          if (item.isExtended) {
            item.items =
              item.items &&
              item.items
                .filter((extendItem, index) => index % 2 === 0)
                .concat(
                  item.items.filter((extendItem, index) => index % 2 === 1)
                );
          }

          return item;
        })
      );
    } else {
      setConfigItems(items);
    }
  }, [isMobile, isDesktop]);

  return (
    <MobileMenu
      items={configItems}
      mobileMenuCallback={mobileMenuCallback}
      isMobileNav
      activeItem={activeItem}
    >
      <MenuItem>
        <Burger open={isMobileMenuOpened} />
      </MenuItem>
    </MobileMenu>
  );
};

export default MobileDropdownMenu;
