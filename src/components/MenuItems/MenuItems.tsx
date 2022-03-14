import React from "react";
import { Flex } from "../Box";
import { Text } from "../Text";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { MenuItemsProps } from "./types";

const MenuItems: React.FC<MenuItemsProps> = ({
  items = [],
  activeItem,
  activeSubItem,
  ...props
}) => {
  return (
    <Flex {...props}>
      {items.map(
        ({ label, items: menuItems = [], href, icon = "", isExtended }) => {
          const statusColor = menuItems?.find(
            (menuItem) => menuItem.status !== undefined
          )?.status?.color;
          const isActive = activeItem === href;
          const linkProps =
            isTouchDevice() && menuItems && menuItems.length > 0
              ? {}
              : { href };
          return (
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
                {icon && (
                  <IconComponent
                    iconName={icon}
                    color={isActive ? "pastelBlue" : "white"}
                  />
                )}
                <Text ml={"8px"} color={isActive ? "pastelBlue" : "white"}>
                  {label}
                </Text>
              </MenuItem>
            </DropdownMenu>
          );
        }
      )}
    </Flex>
  );
};

export default MenuItems;
