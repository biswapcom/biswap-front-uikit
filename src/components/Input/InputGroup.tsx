import React, { cloneElement } from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import Box from "../Box/Box";
import Input from "./Input";
import { InputGroupProps, scales, Scales, Variants } from "./types";
import { styleVariants, scaleVariants } from "./theme";

const getPadding = (scale: Scales, hasIcon: boolean) => {
  if (!hasIcon) {
    switch (scale) {
      case scales.SM:
        return "12px";
      case scales.LG:
        return "24px";
      case scales.MD:
      default:
        return "16px";
    }
  }

  switch (scale) {
    case scales.SM:
      return "36px";
    case scales.LG:
      return "60px";
    case scales.MD:
    default:
      return "44px";
  }
};

const StyledInputGroup = styled(Box)<{
  scale: Scales;
  variant?: Variants;
  hasStartIcon: boolean;
  hasEndIcon: boolean;
}>`
  display: block;
  outline: 0;
  width: 100%;
  position: relative;

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}

  ${Input} {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;

    ${variant({
      prop: "variant",
      variants: styleVariants,
    })}

    padding-left: ${({ hasStartIcon, scale }) =>
      getPadding(scale, hasStartIcon)};
    padding-right: ${({ hasEndIcon, scale }) => getPadding(scale, hasEndIcon)};
  }
`;

const InputIcon = styled.div<{ scale: Scales; isEndIcon?: boolean }>`
  align-items: center;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  ${({ isEndIcon, scale }) =>
    isEndIcon
      ? `
    right: ${
      scale === scales.SM ? "12px" : scale === scales.MD ? "16px" : "24px"
    };
  `
      : `
    left: ${
      scale === scales.SM ? "12px" : scale === scales.MD ? "16px" : "24px"
    };
  `}
`;

const InputGroup = ({
  scale = scales.MD,
  startIcon,
  endIcon,
  children,
  variant,
  ...props
}: InputGroupProps): JSX.Element => (
  <StyledInputGroup
    scale={scale}
    variant={variant}
    width="100%"
    position="relative"
    hasStartIcon={!!startIcon}
    hasEndIcon={!!endIcon}
    {...props}
  >
    {startIcon && <InputIcon scale={scale}>{startIcon}</InputIcon>}
    {cloneElement(children, { scale })}
    {endIcon && (
      <InputIcon scale={scale} isEndIcon>
        {endIcon}
      </InputIcon>
    )}
  </StyledInputGroup>
);

export default InputGroup;
