import React, { cloneElement, ElementType, isValidElement } from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants } from "./types";
import {LoaderIcon} from "../Svg";

const Button = <E extends ElementType = "button">(
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
    loadingTitle,
    ...rest
  } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];
  const loadingText = loadingTitle ?? 'Loading...'
  const endIconElement = isLoading ? <LoaderIcon color='contrast' /> : endIcon
  if (isLoading) {
    classNames.push("button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        {isLoading ? loadingText : children}
        {isValidElement(endIconElement) &&
          cloneElement(endIconElement, {
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default Button;
