import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import { TabBarItemProps, tabVariants } from "./types";
import TabItem from "./TabItem";
import { useMatchBreakpoints } from "../../hooks";

const InactiveButton: PolymorphicComponent<TabBarItemProps, "button"> = styled(
  TabItem
)<TabBarItemProps>`
  color: ${({ theme, variant }) =>
    theme.colors[variant === tabVariants.DARK ? "pastelBlue" : "gray900"]};
`;

const TabBarItem: FC<TabBarItemProps> = ({
  isActive = false,
  variant,
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
    if (setWidth && itemWidth) {
      setWidth((prev: Array<number>) =>
        prev.map((item, index) => (index === itemIndex ? itemWidth : item))
      );
    }
  }, [element, isDesktop, isMobile, isTablet, blockOffset]);

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
    <TabItem
      onClick={handleClick}
      className={className}
      variant={variant}
      {...props}
    />
  );
};

export default TabBarItem;
