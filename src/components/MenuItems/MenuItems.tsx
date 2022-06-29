import React, { Fragment } from "react";
import { Flex } from "../Box";
import { Text } from "../Text";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { ItemTypes, MenuItemsProps } from "./types";
import { useMatchBreakpoints } from "../../hooks";
import MobileDropdownMenu from "../DropdownMenu/MobileMenu/MobileDropdownMenu";
import MenuItemDivider from "../MenuItem/Divider";

const MenuItems: React.FC<MenuItemsProps> = ({
  items = [],
  activeItem,
  activeSubItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
  ...props
}) => {
  const { isDesktop, isTablet } = useMatchBreakpoints();
  return (
    <Flex {...props} alignItems="center">
      {!isDesktop && (
        <MobileDropdownMenu
          items={items}
          activeItem={activeItem}
          isMobileMenuOpened={isMobileMenuOpened}
          mobileMenuCallback={mobileMenuCallback}
        />
      )}
      {items.map(
        ({
          label,
          items: menuItems = [],
          href,
          icon = "",
          isExtended,
          showItemsOnMobile,
          type,
          hidden,
        }) => {
          const statusColor = menuItems?.find(
            (menuItem) => menuItem.status !== undefined
          )?.status?.color;
          const isActive = activeItem === href;
          const linkProps =
            isTouchDevice() && menuItems && menuItems.length > 0
              ? {}
              : { href };
          const visualize =
            (isDesktop || (isTablet && showItemsOnMobile)) && !hidden;
          return (
            visualize && (
              <Fragment key={`${label}#${href}`}>
                <DropdownMenu
                  key={`${label}#${href}#${icon}`}
                  items={menuItems}
                  py={1}
                  activeItem={activeSubItem}
                  isExtended={isExtended}
                >
                  <MenuItem
                    {...linkProps}
                    isActive={isActive}
                    statusColor={statusColor}
                  >
                    {type === ItemTypes.DIVIDER && <MenuItemDivider />}
                    {icon && <IconComponent iconName={icon} color="white" />}
                    {label && (
                      <Text
                        ml={"8px"}
                        color="white"
                        fontSize="14px"
                        fontWeight="600"
                      >
                        {label}
                      </Text>
                    )}
                  </MenuItem>
                </DropdownMenu>
              </Fragment>
            )
          );
        }
      )}
    </Flex>
  );
};

export default MenuItems;
