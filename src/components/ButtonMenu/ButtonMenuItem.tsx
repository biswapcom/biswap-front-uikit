import React, { useEffect, useRef } from "react";

// ui
import styled, { css } from "styled-components";
import { variant } from "styled-system";
import { styleVariants, scaleVariants, markerScales } from "./theme";

// components
import { Box } from "../Box";
import Marker from "../MenuItem/Marker";

// hooks
import { useTooltip } from "../../hooks";
import { useMatchBreakpoints } from "../../contexts";

// utils
import { isTouchDevice, PolymorphicComponent } from "../../util";
import { getColorKey, getHoverKey } from "./helpers";

// types
import { variants } from "./types";
import {
  BaseButtonMenuItemProps,
  ButtonMenuItemProps,
  ColorKey,
  HoverKey,
  scales,
} from "./types";

interface ItemButtonProps extends BaseButtonMenuItemProps {
  colorKey: ColorKey;
  hoverKey: HoverKey;
}

const MenuItemButton: PolymorphicComponent<
  ItemButtonProps,
  "button"
> = styled.button<ItemButtonProps>`
  align-items: center;
  border: 0;
  margin: 0;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-family: inherit;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.3s, color 0.3s;
  background-color: transparent;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  ${variant({
    variants: styleVariants,
  })}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}

  ${({ isActive, colorKey, hoverKey }) =>
    !isActive &&
    css`
      color: ${({ theme }) => theme.colors[colorKey]};

      &:hover {
        color: ${({ theme }) => theme.colors[hoverKey]};
      }

      &:hover:not(:disabled):not(:active) {
        background-color: transparent;
      }
    `}
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.DARK,
  properties,
  scale = scales.MD,
  as,
  setWidth,
  itemIndex = 0,
  activeButtonIndex,
  blockOffset,
  onItemClick = () => {},
  onClick = () => {},
  ...props
}: ButtonMenuItemProps) => {
  const { isMobile, isTablet, isXs, isSm, isMs, isLg, isXl, isXll, isXxl } =
    useMatchBreakpoints();

  const ref = useRef<HTMLButtonElement>(null);

  const disableStopPropagation = isMobile || isTablet || isTouchDevice();

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    properties?.tooltipText,
    { placement: "top", disableStopPropagation }
  );

  const itemWidth = ref?.current?.clientWidth ?? 0;

  useEffect(() => {
    if (itemWidth && setWidth) {
      setWidth((prev: Array<number>) => {
        return prev.length > itemIndex
          ? prev.map((i, index) => (index === itemIndex ? itemWidth : i))
          : [...prev, itemWidth];
      });
    }
  }, [
    blockOffset,
    activeButtonIndex,
    itemWidth,
    isXs,
    isSm,
    isMs,
    isLg,
    isXl,
    isXll,
    isXxl,
  ]);

  const omItemClickHandler = (e: Event) => {
    onItemClick(itemIndex);
    onClick();
    disableStopPropagation && e.stopPropagation();
  };

  return (
    <Box ref={targetRef} position="relative" width="100%">
      {properties?.tooltipText &&
        !properties.dontShowTooltip &&
        tooltipVisible &&
        tooltip}
      <MenuItemButton
        onClick={omItemClickHandler}
        isActive={isActive}
        ref={ref}
        as={as}
        variant={variant}
        hoverKey={getHoverKey(variant)}
        colorKey={getColorKey(variant)}
        scale={scale}
        {...props}
      />
      {properties?.markerColor && (
        <Marker
          color={properties?.markerColor || "success"}
          {...markerScales[scale]}
        />
      )}
    </Box>
  );
};

export default ButtonMenuItem;
