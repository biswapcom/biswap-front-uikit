import React, { Fragment } from "react";
import { Box, Flex } from "../Box";
import { Text } from "../Text";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { ItemTypes, MenuItemsProps } from "./types";
import { useMatchBreakpoints } from "../../contexts";
import MobileDropdownMenu from "../DropdownMenu/MobileMenu/MobileDropdownMenu";
import MenuItemDivider from "../MenuItem/Divider";
import Marker from "../MenuItem/Marker";

const MenuItems: React.FC<MenuItemsProps> = ({
  items = [],
  activeItem,
  activeSubItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
  baseAwsUrl,
  children,
  mobileLangSelector,
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
          baseAwsUrl={baseAwsUrl}
          mobileLangSelector={mobileLangSelector}
        />
      )}
      {items.map(
        (
          {
            label,
            items: menuItems = [],
            href,
            icon = "",
            isExtended,
            showItemsOnMobile,
            type,
            hidden,
            showNavBadge,
            highlightTitle,
          },
          index
        ) => {
          const isMarker = items[index]?.showNavBadge;
          const isMarkerColor = items[index]?.colorNavBadge;
          const isHighlighted = items[index].highlightTitle;
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
                    highlightTitle={highlightTitle}
                  >
                    {type === ItemTypes.DIVIDER && <MenuItemDivider />}
                    {icon && (
                      <IconComponent mr="8px" iconName={icon} color="white" />
                    )}
                    {label && (
                      <Box ml={!href ? "8px" : 0} position="relative">
                        {/*@ts-ignore*/}
                        {isMarker && <Marker color={isMarkerColor} />}
                        <Text
                          color={isHighlighted ? "warningPress" : "white"}
                          fontSize="14px"
                          lineHeight="20px"
                          fontWeight="600"
                        >
                          {label}
                        </Text>
                      </Box>
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
