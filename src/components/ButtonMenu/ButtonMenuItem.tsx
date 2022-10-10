import React, { useEffect, useRef } from "react";
import styled from "styled-components";
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

interface InactiveButtonProps extends BaseButtonMenuItemProps {
  // forwardedAs: BaseButtonMenuItemProps["as"];
  colorKey: ColorKey;
  hoverKey: HoverKey;
}

const MenuItemButton: PolymorphicComponent<
  BaseButtonMenuItemProps,
  "button"
> = styled.button<BaseButtonMenuItemProps>`
  align-items: center;
  border: 0;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s, color 0.3s;
  background-color: transparent;
  white-space: nowrap;

  ${variant({
    variants: styleVariants,
  })}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
`;

const InactiveButton: PolymorphicComponent<
  InactiveButtonProps,
  "button"
> = styled(MenuItemButton)<InactiveButtonProps>`
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};

  &:hover {
    color: ${({ theme, hoverKey }) => theme.colors[hoverKey]};
  }

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
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

  if (!isActive) {
    return (
      <InactiveButton
        ref={inactiveRef}
        as={as}
        variant={variant}
        hoverKey={getHoverKey(variant)}
        colorKey={getColorKey(variant)}
        {...props}
      />
    );
  }

  return (
    <MenuItemButton ref={activeRef} as={as} variant={variant} {...props} />
  );
};

export default ButtonMenuItem;
