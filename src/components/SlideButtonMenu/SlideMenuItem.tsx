import React, { ElementType } from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { SlideButtonProps, slideMenuScales, slideMenuVariants } from "./types";
import StyledSlideMenuItem from "./StyledSlideMenuItem";

const SlideMenuItem = <E extends ElementType = "button">(
  props: SlideButtonProps<E>
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
    <StyledSlideMenuItem
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      {children}
    </StyledSlideMenuItem>
  );
};

SlideMenuItem.defaultProps = {
  isLoading: false,
  external: false,
  variant: slideMenuVariants.DARK,
  scale: slideMenuScales.SM,
  disabled: false,
};

export default SlideMenuItem;
