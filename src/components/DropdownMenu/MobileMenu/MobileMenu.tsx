import React, { FC, useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../widgets/Menu/context";
import { usePopper } from "react-popper";
import { useMatchBreakpoints } from "../../../contexts";
import { Box, Grid } from "../../Box";
import { Text } from "../../Text";
import styled from "styled-components";
import { DropdownMenuItemType, MobileMenuProps } from "../types";
import MenuItemContent from "../components/MenuItemContent";

import { BorderMobileMenuItem, DropdownMenuDivider } from "../styles";
import { DropdownMenuItemContainer } from "../components";
import IconComponent from "../../Svg/IconComponent";
import Accordion from "../../Accordion/Accordion";
import Community from "../../../widgets/Menu/components/Footer/Community";
import Marker from "../../MenuItem/Marker";

const MainContententWrapper = styled.div`
  flex: 1;
`;

const MobileCommunityWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 0 24px;
`;

const StyledMobileMenu = styled.div<{
  $isOpen: boolean;
}>`
  background-color: ${({ theme }) => theme.card.background};
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  visibility: visible;
  opacity: 1;
  transition: opacity 250ms linear, visibility 350ms linear;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  ${({ $isOpen }) =>
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
  const { linkComponent } = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);

  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints();

  const hasItems = items.length > 0;
  const { styles, attributes, update } = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "bottom",
  });

  useEffect(() => {
    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      target && !tooltipRef?.contains(target) && setIsOpen(false);
    };

    targetRef?.addEventListener("mouseleave", hideDropdownMenu);

    return () => {
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen, update]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    mobileMenuCallback && mobileMenuCallback(isOpen);
  }, [isOpen]);

  const onPointerDownHandler = async () => {
    setIsOpen((s) => !s);
    update && (await update());
  };

  return (
    <Box ref={setTargetRef} {...props}>
      <Box onPointerDown={onPointerDownHandler}>{children}</Box>
      {hasItems && (
        <StyledMobileMenu
          style={styles.popper}
          ref={setTooltipRef}
          {...attributes.popper}
          $isOpen={isOpen}
        >
          <MainContententWrapper>
            {items
              .filter((item) => item.label && !item.type)
              .map(
                (
                  {
                    label,
                    items: innerItems = [],
                    showItemsOnMobile,
                    hidden,
                    showNavBadge,
                    href,
                    highlightTitle,
                  },
                  index
                ) => {
                  const isMarker = items[index].showNavBadge;
                  if (hidden) return null;
                  const isHighlighted = items[index].highlightTitle;
                  const visualize =
                    !showItemsOnMobile ||
                    (showItemsOnMobile && isMobile && !hidden);
                  return (
                    <BorderMobileMenuItem
                      key={`${label}#${index}`}
                      isHighlighted={isHighlighted}
                    >
                      <Accordion
                        index={index}
                        label={label}
                        href={href}
                        linkComponent={linkComponent}
                        setIsOpenMenu={setIsOpen}
                        clickable={!isTablet && innerItems.length > 0}
                        heading={(opened) => {
                          return (
                            ((!showItemsOnMobile && !hidden) ||
                              (href && !isTablet)) && (
                              <>
                                <Box m="16px 0" position="relative">
                                  {isMarker && <Marker />}
                                  <Text
                                    bold
                                    fontSize={isTablet ? "20px" : "14px"}
                                    lineHeight={isTablet ? "26px" : "20px"}
                                    color={
                                      isMobile && opened && !href
                                        ? "primary"
                                        : isHighlighted && isTablet
                                        ? "warningPress"
                                        : "backgroundDark"
                                    }
                                  >
                                    {label}
                                  </Text>
                                </Box>

                                {!isTablet && (
                                  <IconComponent
                                    iconName={
                                      href
                                        ? "ArrowRight"
                                        : opened
                                        ? "ChevronUp"
                                        : "ChevronDown"
                                    }
                                    color={opened ? "primary" : "dark800"}
                                  />
                                )}
                              </>
                            )
                          );
                        }}
                      >
                        {innerItems.length > 0 && (
                          <Grid
                            gridTemplateColumns={
                              isMobile ? "1fr" : "repeat(2, 1fr)"
                            }
                            gridColumnGap={16}
                            mt={16}
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
                                  badgeTitle,
                                  badgeType,
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
                                    badgeTitle={badgeTitle}
                                    badgeType={badgeType}
                                  />
                                );

                                const isActive = href === activeItem;

                                return (
                                  visualize && (
                                    <DropdownMenuItemContainer
                                      label={label}
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
                                      badgeTitle={badgeTitle}
                                      badgeType={badgeType}
                                      {...itemProps}
                                    />
                                  )
                                );
                              }
                            )}
                          </Grid>
                        )}
                      </Accordion>

                      {isTablet && !showItemsOnMobile && (
                        <DropdownMenuDivider />
                      )}
                    </BorderMobileMenuItem>
                  );
                }
              )}
            {!isTablet && isMobile && (
              <DropdownMenuDivider color="rgba(18, 99, 241, 0.16)" />
            )}
          </MainContententWrapper>
          {isMobile && (
            <MobileCommunityWrapper>
              <Community menuVariant iconSize="24px" />
            </MobileCommunityWrapper>
          )}
        </StyledMobileMenu>
      )}
    </Box>
  );
};

export default MobileMenu;
