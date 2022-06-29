import React, { ElementType } from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { TabProps, tabsScales, tabVariants } from "./types";
import StyledTabItem from "./StyledTabItem";

const TabItem = <E extends ElementType = "button">(
  props: TabProps<E>
): JSX.Element => {
  const {
    startIcon,
    endIcon,
    external,
    className,
    disabled,
    children,
    variant,
    ...rest
  } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const classNames = className ? [className] : [];

  if (disabled) {
    classNames.push("button--disabled");
  }

  return (
    <StyledTabItem
      className={classNames.join(" ")}
      disabled={disabled}
      variant={variant}
      {...internalProps}
      {...rest}
    >
      {children}
    </StyledTabItem>
  );
};

TabItem.defaultProps = {
  external: false,
  variant: tabVariants.DARK,
  scale: tabsScales.SM,
  disabled: false,
};

export default TabItem;
