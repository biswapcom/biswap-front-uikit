import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { TabBarItemProps, tabsScales, tabVariants } from "./types";
import { useMatchBreakpoints } from "../../hooks";
import {
  barItemScaleVariant,
  barVariants,
  menuIconScaleVariants,
} from "./theme";
import { variant } from "styled-system";
import IconComponent from "../Svg/IconComponent";
import { Flex } from "../Box";
import { PolymorphicComponent } from "../../util";

const TabItem: PolymorphicComponent<
  TabBarItemProps,
  "button"
> = styled.button<TabBarItemProps>`
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  outline: 0;
  transition: background-color 0.3s, opacity 0.3s, color 0.3s;
  background-color: transparent;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  ${variant({
    variants: barVariants,
  })}
  ${variant({
    prop: "scale",
    variants: barItemScaleVariant,
  })}
  
  ${({ isActive, variant, theme }) =>
    isActive &&
    css`
      color: ${theme.colors[
        variant === tabVariants.DARK ? "white" : "dark800"
      ]};
    `}
`;

const TabBarItem: PolymorphicComponent<TabBarItemProps, "button"> = ({
  isActive = false,
  variant,
  setWidth,
  itemIndex = 0,
  blockOffset,
  iconName = "",
  iconColor = "",
  scale = tabsScales.SM,
  as,
  onItemClick = () => {},
  onClick = () => {},
  children,
  ...props
}: TabBarItemProps): JSX.Element => {
  const { isXs, isSm, isMs, isLg, isXl, isXll, isXxl } = useMatchBreakpoints();

  const ref = useRef<HTMLButtonElement>(null);

  const itemWidth = ref.current?.clientWidth;

  useEffect(() => {
    if (itemWidth && setWidth) {
      setWidth((prev: Array<number>) => {
        return prev.length > itemIndex
          ? prev.map((i, index) => (index === itemIndex ? itemWidth : i))
          : [...prev, itemWidth];
      });
    }
  }, [blockOffset, itemWidth, isXs, isSm, isMs, isLg, isXl, isXll, isXxl]);

  const omItemClickHandler = () => {
    onItemClick(itemIndex);
    onClick();
  };

  const iconSizes = menuIconScaleVariants[scale];

  console.log("scale", scale, barItemScaleVariant);

  const getTabMenuIcons = () => {
    return (
      <IconComponent
        width={iconSizes.width}
        iconName={iconName}
        color={iconColor ?? "currentColor"}
        mr={iconSizes.marginRight}
      />
    );
  };

  return (
    <TabItem
      onClick={omItemClickHandler}
      isActive={isActive}
      ref={ref}
      as={as}
      variant={variant}
      scale={scale}
      {...props}
    >
      <Flex height={iconSizes.width} alignItems="center">
        {getTabMenuIcons()}
        {children}
      </Flex>
    </TabItem>
  );
};

export default TabBarItem;
