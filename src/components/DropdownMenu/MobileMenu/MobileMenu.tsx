import React, { FC, useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../widgets/Menu/context";
import { usePopper } from "react-popper";
import { useMatchBreakpoints } from "../../../hooks";
import { Box, Grid } from "../../Box";
import { Text } from "../../Text";
import styled from "styled-components";
import { DropdownMenuItemType, MobileMenuProps } from "../types";
import MenuItemContent from "../components/MenuItemContent";

import { DropdownMenuDivider } from "../styles";
import { DropdownMenuItemContainer } from "../components";
import IconComponent from "../../Svg/IconComponent";
import Accordion from "../../Accordion/Accordion";
import Community from "../../../widgets/Menu/components/Footer/Community";

const MainContententWrapper = styled.div`
  flex: 1;
`;

const MobileCommunityWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1em;
`;

const StyledMobileMenu = styled.div<{
  $isOpen: boolean;
}>`
  padding: 32px 24px 0 24px;
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
                  { label, items: innerItems = [], showItemsOnMobile, hidden },
                  index
                ) => {
                  if (!innerItems.length) return null;
                  const visualize =
                    !showItemsOnMobile ||
                    (showItemsOnMobile && isMobile && !hidden);
                  return (
                    <Box key={`${label}#${index}`}>
                      <Accordion
                        index={index}
                        label={label}
                        clickable={!isTablet}
                        heading={(opened) => {
                          return (
                            !showItemsOnMobile &&
                            !hidden && (
                              <>
                                <Text
                                  bold
                                  m={"16px 0"}
                                  fontSize={isTablet ? "20px" : "14px"}
                                  color={
                                    isMobile && opened
                                      ? "primary"
                                      : "backgroundDark"
                                  }
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
                      {isTablet && !showItemsOnMobile && (
                        <DropdownMenuDivider />
                      )}
                    </Box>
                  );
                }
              )}
            {!isTablet && isMobile && (
              <Box m={"0 -24px 0"}>
                <DropdownMenuDivider color="rgba(18, 99, 241, 0.16)" />
              </Box>
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
