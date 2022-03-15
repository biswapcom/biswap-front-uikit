import React, { FC, useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../widgets/Menu/context";
import { usePopper } from "react-popper";
import { useMatchBreakpoints, useOnClickOutside } from "../../../hooks";
import { Box, Grid } from "../../Box";
import { Text } from "../../Text";
import styled from "styled-components";
import { DropdownMenuItemType, MobileMenuProps } from "../types";
import MenuItemContent from "../components/MenuItemContent";

import { DropdownMenuDivider } from "../styles";
import { DropdownMenuItemContainer } from "../components";

const StyledMobileMenu = styled.div<{
  $isOpen: boolean;
}>`
  padding: 32px 24px 0 24px;
  background-color: ${({ theme }) => theme.card.background};
  width: 100vw;
  max-height: 100vh;
  overflow: auto;
  visibility: visible;
  opacity: 1;
  transition: opacity 250ms linear, visibility 350ms linear;

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  `}
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
  const { isMobile, isTablet } = useMatchBreakpoints();

  const hasItems = items.length > 0;
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "auto",
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
        <StyledMobileMenu
          style={styles.popper}
          ref={setTooltipRef}
          {...attributes.popper}
          $isOpen={isOpen}
        >
          {items.map(
            ({ label, items: innerItems = [], showItemsOnMobile }, index) => {
              const visualize =
                !showItemsOnMobile || (showItemsOnMobile && isMobile);
              return (
                <Box key={`${label}#${index}`}>
                  {showItemsOnMobile && isMobile && (
                    <Box m={"0 -24px 16px"}>
                      <DropdownMenuDivider />
                    </Box>
                  )}
                  {!showItemsOnMobile && <Text m={"16px 0"}>{label}</Text>}
                  <Grid
                    gridTemplateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
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
                  {isTablet && !showItemsOnMobile && <DropdownMenuDivider />}
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
