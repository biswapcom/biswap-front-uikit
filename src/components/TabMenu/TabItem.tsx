import React, { ElementType } from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { ButtonProps } from "../Button";
import { tabsScales, tabVariants } from "./types";
import StyledMenuItem from "./StyledTabItem";

const TabItem = <E extends ElementType = "button">(
  props: ButtonProps<E>
): JSX.Element => {
  const {
    startIcon,
    endIcon,
    external,
    className,
    isLoading,
    disabled,
    children,
    ...rest
  } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isDisabled && !isLoading) {
    classNames.push("button--disabled");
  }

  return (
    <StyledMenuItem
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      {children}
    </StyledMenuItem>
  );
};

TabItem.defaultProps = {
  isLoading: false,
  external: false,
  variant: tabVariants.TAB,
  scale: tabsScales.MD,
  disabled: false,
};

export default TabItem;
