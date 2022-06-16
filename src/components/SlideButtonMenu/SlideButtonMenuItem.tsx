import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import { SlideButtonMenuItemProps, slideMenuVariants } from "./types";
import SlideMenuItem from "./SlideMenuItem";
import { useMatchBreakpoints } from "../../hooks";
import {tabVariants} from "../TabMenu/types";

const InactiveButton: PolymorphicComponent<
    SlideButtonMenuItemProps,
  "button"
> = styled(SlideMenuItem)<SlideButtonMenuItemProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => theme.colors[variant === tabVariants.DARK ? "pastelBlue" : "gray900"]};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const SlideButtonMenuItem: FC<SlideButtonMenuItemProps> = ({
  isActive = false,
  variant = slideMenuVariants.DARK,
  setWidth,
  itemIndex,
  onAction,
  customClass,
  blockOffset,
  ...props
}: SlideButtonMenuItemProps): JSX.Element => {
  const { isDesktop, isMobile, isTablet } = useMatchBreakpoints();

  const className = "slide-menu-item-" + itemIndex + customClass;
  const element = document.getElementsByClassName(className);

  useEffect(() => {
    const itemWidth = element.item(0)?.clientWidth ?? 0;
    if (itemWidth && setWidth) {
      setWidth((prev: Array<number>) =>
        prev.map((item, index) => (index === itemIndex ? itemWidth : item))
      );
    }
  }, [element, blockOffset, isDesktop, isMobile, isTablet]);

  const handleClick = () => {
    if (onAction) onAction(itemIndex ?? 0);
  };

  if (!isActive) {
    return (
      <InactiveButton
        onClick={handleClick}
        className={className}
        variant={variant}
        {...props}
      />
    );
  }

  return (
    <SlideMenuItem
      onClick={handleClick}
      className={className}
      variant={variant}
      {...props}
    />
  );
};

export default SlideButtonMenuItem;
