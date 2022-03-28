import React, {FC, useState} from "react";
import IconComponent from "../../Svg/IconComponent";
import {Flex} from "../../Box";
import {Text} from "../../Text";
import {useMatchBreakpoints} from "../../../hooks";
import MobileMenu from "./MobileMenu";
import {MenuItemsProps} from "../../MenuItems/types";
import MenuItem from "../../MenuItem";

const MobileDropdownMenu: FC<MenuItemsProps> = ({items, activeItem}) => {
  const [isOpened, setIsOpened] = useState(false);
  const {isMobile} = useMatchBreakpoints();

  return (
    <MobileMenu
      items={items}
      mobileMenuCallback={setIsOpened}
      isMobileNav
      activeItem={activeItem}
    >
      <MenuItem>
        <IconComponent
          iconName={isOpened ? "ButtonMenuOpened" : "ButtonMenu"}
          color={isMobile ? "text" : "white"}
        />
        {!isMobile && <Text ml="8px">Menu</Text>}
      </MenuItem>
    </MobileMenu>
  );
};

export default MobileDropdownMenu;
