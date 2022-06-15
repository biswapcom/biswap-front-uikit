import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import { BaseButtonProps } from "../Button/types";
import { TabBarItemProps, tabVariants } from "./types";
import TabItem from "./TabItem";
import { useMatchBreakpoints } from "../../hooks";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<
  InactiveButtonProps,
  "button"
> = styled(TabItem)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.pastelBlue};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const TabBarItem: FC<TabBarItemProps> = ({
  isActive = false,
  variant = tabVariants.TAB,
  as,
  setWidth,
  itemIndex,
  onAction,
  customClass,
  blockOffset,
  ...props
}: TabBarItemProps): JSX.Element => {
  const { isDesktop, isMobile, isTablet } = useMatchBreakpoints();
  const className = "tab-bar-item-" + itemIndex + customClass;
  const element = document.getElementsByClassName(className);

  useEffect(() => {
    const itemWidth = element.item(0)?.clientWidth ?? 0;
    if (itemWidth) {
      setWidth((prev: Array<number>) =>
        prev.map((item, index) => (index === itemIndex ? itemWidth : item))
      );
    }
  }, [element, isDesktop, isMobile, isTablet, blockOffset]);

  const handleClick = () => {
    onAction(itemIndex);
  };

  if (!isActive) {
    return (
      <InactiveButton
        onClick={handleClick}
        className={className}
        forwardedAs={as}
        variant={variant}
        {...props}
      />
    );
  }

  return (
    <TabItem
      onClick={handleClick}
      className={className}
      as={as}
      variant={variant}
      {...props}
    />
  );
};

export default TabBarItem;
