import React, { cloneElement, ElementType, isValidElement } from "react";
import styled, { keyframes } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants } from "./types";
import { AutoRenewAnimateIcon } from "../Svg";
import { MarkerType } from "../../theme";

const PULSE_SUCCESS = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);
  }
`;
const PULSE_WARNING = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);
  }
`;
const PULSE_PRIMARY = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);
  }
`;
const PULSE_SECONDARY = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);
  }
`;

const PULSES: any = {
  PRIMARY: PULSE_PRIMARY,
  SECONDARY: PULSE_SECONDARY,
  WARNING: PULSE_WARNING,
  SUCCESS: PULSE_SUCCESS,
} as const;

const Bubble = styled.span<{ bubbleColor?: keyof MarkerType }>`
  position: absolute;
  top: 14%;
  right: 11%;
  width: 6px;
  height: 6px;
  transform: translateX(100%);
  border-radius: 50%;
  background-color: ${({ theme, bubbleColor }) =>
    !bubbleColor ? theme.colors.success : theme.colors[bubbleColor]};

  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: -2px;
    left: -2px;
    z-index: 1;
    animation: ${({ color }) =>
        color ? PULSES[color.toUpperCase()] : PULSE_SUCCESS}
      2s infinite;
  }
`;

const Button = <E extends ElementType = "button">(
  props: ButtonProps<E>
): JSX.Element => {
  const {
    addBubble,
    bubbleColor,
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
  const loadingText = loadingTitle ?? "Loading...";
  const endIconElement = isLoading ? (
    <AutoRenewAnimateIcon color="contrast" />
  ) : (
    endIcon
  );
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
        {addBubble && <Bubble />}
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        {isLoading ? loadingText : children}
        {isValidElement(endIconElement) &&
          cloneElement(endIconElement, {
            // @ts-ignore
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
