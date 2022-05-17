/* eslint-disable react/no-array-index-key */
import React, {useContext, useEffect, useState} from "react";
import {usePopper} from "react-popper";
import {useOnClickOutside} from "../../hooks";
import {MenuContext} from "../../widgets/Menu/context";
import {Box} from "../Box";
import {MenuItemContent, DropdownMenuItemContainer} from "./components";

import {
  StyledDropdownMenu,
  // LinkStatus,
} from "./styles";
import {DropdownMenuItemType, DropdownMenuProps} from "./types";

const DropdownMenu: React.FC<DropdownMenuProps> = ({
                                                     children,
                                                     isMobileNav = false,
                                                     showItemsOnMobile = false,
                                                     activeItem = "",
                                                     items = [],
                                                     mobileItems = [],
                                                     index,
                                                     isExtended = false,
                                                     setMenuOpenByIndex,
                                                     mobileMenuCallback,
                                                     ...props
                                                   }) => {
  const { linkComponent } = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const hasItems = items.length > 0;
  const hasMoreThanItems = items.length > 1;
  const {styles, attributes} = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "bottom-start",
    modifiers: [{name: "offset", options: {offset: [0, 0]}}],
  });

  useEffect(() => {
    const showDropdownMenu = () => {
      setIsOpen(true);
    };

    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      return target && !tooltipRef?.contains(target) && setIsOpen(false);
    };

    targetRef?.addEventListener("mouseenter", showDropdownMenu);
    targetRef?.addEventListener("mouseleave", hideDropdownMenu);

    return () => {
      targetRef?.removeEventListener("mouseenter", showDropdownMenu);
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen]);

  useEffect(() => {
    if (setMenuOpenByIndex && index !== undefined) {
      setMenuOpenByIndex((prevValue) => ({
        ...prevValue,
        [index]: isOpen,
      }));
    }
  }, [isOpen, setMenuOpenByIndex, index]);

  useEffect(() => {
    mobileMenuCallback && mobileMenuCallback(isOpen);
  }, [isOpen]);

  useOnClickOutside(
    {
      current: targetRef,
    },
    () => {
      setIsOpen(false);
    }
  );

  return (
    <Box ref={setTargetRef} {...props}>
      <Box
        onPointerDown={() => {
          setIsOpen((s) => !s);
        }}
      >
        {children}
      </Box>
      {hasItems && (
        <StyledDropdownMenu
          style={styles.popper}
          ref={setTooltipRef}
          {...attributes.popper}
          $isOpen={isOpen}
          $isExtended={isExtended && hasMoreThanItems}
        >
          {items.map(
            (
              {
                type = DropdownMenuItemType.INTERNAL_LINK,
                label,
                rightIconFill,
                description,
                href = "/",
                status,
                leftIcon = "",
                rightIcon = "",
                links = [],
                bannerRenderer,
                target,
                mobileTarget,
                ...itemProps
              },
              itemItem
            ) => {
              const getMenuItemContent = (icon: string = rightIcon) => (
                <MenuItemContent
                  label={label}
                  fill={rightIconFill}
                  leftIcon={leftIcon}
                  rightIcon={icon}
                  description={description}
                  status={status}
                />
              );
              const isActive = href === activeItem;

              return (
                <DropdownMenuItemContainer
                  key={itemItem}
                  isActive={isActive}
                  leftIcon={leftIcon}
                  getMenuItemContent={getMenuItemContent}
                  links={links}
                  setIsOpen={setIsOpen}
                  linkComponent={linkComponent}
                  href={href}
                  bannerRenderer={bannerRenderer}
                  type={type}
                  target={target}
                  mobileTarget={mobileTarget}
                  {...itemProps}
                />
              );
            }
          )}
        </StyledDropdownMenu>
      )}
    </Box>
  );
};

export default DropdownMenu;
