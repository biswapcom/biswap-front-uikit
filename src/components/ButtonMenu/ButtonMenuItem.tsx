import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { variant } from "styled-system";
import { styleVariants, scaleVariants } from "./theme";
import {
  BaseButtonMenuItemProps,
  ButtonMenuItemProps,
  ColorKey,
  HoverKey,
} from "./types";
import { variants } from "./types";
import { PolymorphicComponent } from "../../util";
import { useMatchBreakpoints } from "../../hooks";
import { getColorKey, getHoverKey } from "./helpers";

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
  cursor: pointer;
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
  as,
  setWidth,
  itemIndex = 0,
  blockOffset,
  ...props
}: ButtonMenuItemProps) => {
  const { isXs, isSm, isMs, isLg, isXl, isXll, isXxl } = useMatchBreakpoints();

  const activeRef = useRef<HTMLButtonElement>(null);
  const inactiveRef = useRef<HTMLButtonElement>(null);

  const itemWidth =
    activeRef.current?.clientWidth ?? inactiveRef.current?.clientWidth;

  useEffect(() => {
    if (itemWidth && setWidth) {
      setWidth((prev: Array<number>) => {
        return prev.length > itemIndex
          ? prev.map((i, index) => (index === itemIndex ? itemWidth : i))
          : [...prev, itemWidth];
      });
    }
  }, [blockOffset, itemWidth, isXs, isSm, isMs, isLg, isXl, isXll, isXxl]);

  return (
    <MenuItemButton
      isActive={isActive}
      ref={activeRef}
      as={as}
      variant={variant}
      hoverKey={getHoverKey(variant)}
      colorKey={getColorKey(variant)}
      {...props}
    />
  );
};

export default ButtonMenuItem;
