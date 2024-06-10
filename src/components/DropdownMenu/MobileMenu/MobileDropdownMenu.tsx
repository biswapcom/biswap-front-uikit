import React, { FC, useEffect, useState } from "react";

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
  baseAwsUrl,
  mobileLangSelector,
}) => {
  const { isMobile } = useMatchBreakpoints();

  const [configItems, setConfigItems] = useState(items);

  useEffect(() => {
    if (isMobile) {
      setConfigItems(
        items.map((item) => {
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
  }, [isMobile, items]);

  return (
    <MobileMenu
      items={configItems}
      mobileMenuCallback={mobileMenuCallback}
      isMobileNav
      activeItem={activeItem}
      baseAwsUrl={baseAwsUrl}
      mobileLangSelector={mobileLangSelector}
    >
      <MenuItem>
        <Burger open={isMobileMenuOpened} />
      </MenuItem>
    </MobileMenu>
  );
};

export default MobileDropdownMenu;
