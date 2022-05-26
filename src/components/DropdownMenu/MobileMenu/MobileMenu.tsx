import React, {FC, useContext, useEffect, useState} from "react";
import {MenuContext} from "../../../widgets/Menu/context";
import {usePopper} from "react-popper";
import {useMatchBreakpoints, useOnClickOutside} from "../../../hooks";
import {Box, Grid} from "../../Box";
import {Text} from "../../Text";
import styled from "styled-components";
import {DropdownMenuItemType, MobileMenuProps} from "../types";
import MenuItemContent from "../components/MenuItemContent";

import {DropdownMenuDivider} from "../styles";
import {DropdownMenuItemContainer} from "../components";
import IconComponent from "../../Svg/IconComponent";
import Accordion from "../../Accordion/Accordion";

const StyledMobileMenu = styled.div<{
  $isOpen: boolean;
}>`
  padding: 32px 24px 0 24px;
  background-color: ${({theme}) => theme.card.background};
  width: 100vw;
  height: calc(100vh + 40px);
  //min-height: calc(100vh - 52px);
  overflow: auto;
  visibility: visible;
  opacity: 1;
  transition: opacity 250ms linear, visibility 350ms linear;

  ${({$isOpen}) =>
  !$isOpen &&
  `
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  `}

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-slider-thumb {
    display: none;
  }
`;

const MobileMenu: FC<MobileMenuProps> = ({
   items,
   mobileMenuCallback,
   children,
   activeItem,
   ...props
}) => {
  const {linkComponent} = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);

  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const {isMobile, isTablet} = useMatchBreakpoints();

  const hasItems = items.length > 0;
  const {styles, attributes, update, forceUpdate} = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "bottom",
  });

  useEffect(() => {
    const showDropdownMenu = async () => {
      forceUpdate && await forceUpdate()
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
    mobileMenuCallback && mobileMenuCallback(isOpen);
  }, [isOpen]);

  // useOnClickOutside(
  //   {
  //     current: targetRef,
  //   },
  //   () => {
  //     setIsOpen(false);
  //   }
  // );

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
        <StyledMobileMenu
          style={styles.popper}
          ref={setTooltipRef}
          {...attributes.popper}
          $isOpen={isOpen}
        >
          {items
            .filter((item) => item.label && !item.type)
            .map(
              ({label, items: innerItems = [], showItemsOnMobile, hidden}, index) => {
                const visualize =
                  (!showItemsOnMobile || (showItemsOnMobile && isMobile) && !hidden);
                return (
                  <Box key={`${label}#${index}`}>
                    {showItemsOnMobile && isMobile && (
                      <Box m={"0 -24px 16px"}>
                        <DropdownMenuDivider/>
                      </Box>
                    )}
                    <Accordion
                      label={label}
                      clickable={!isTablet}
                      heading={(opened) => {
                        return (
                          !showItemsOnMobile && !hidden && (
                            <>
                              <Text
                                bold
                                m={"16px 0"}
                                fontSize={isTablet ? "20px" : "14px"}
                                color={isMobile && opened ? "primary" : "backgroundDark"}
                              >
                                {label}
                              </Text>
                              {!isTablet && (
                                <IconComponent
                                  iconName={
                                    opened ? "ChevronUp" : "ChevronDown"
                                  }
                                  color={opened ? "primary" : "text"}
                                />
                              )}
                            </>
                          )
                        );
                      }}
                    >
                      <Grid
                        gridTemplateColumns={
                          isMobile ? "1fr" : "repeat(3, 1fr)"
                        }
                        gridColumnGap={16}
                      >
                        {innerItems.map(
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
                              ...itemProps
                            },
                            itemItem
                          ) => {
                            const getMenuItemContent = (
                              icon: string = rightIcon
                            ) => (
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
                              visualize && (
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
                                  {...itemProps}
                                />
                              )
                            );
                          }
                        )}
                      </Grid>
                    </Accordion>
                    {isTablet && !showItemsOnMobile && <DropdownMenuDivider/>}
                  </Box>
                );
              }
            )}
        </StyledMobileMenu>
      )}
    </Box>
  );
};

export default MobileMenu;
