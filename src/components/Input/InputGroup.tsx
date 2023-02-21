import React, { FC, cloneElement } from "react";
import styled, { css } from "styled-components";
import { variant } from "styled-system";
import Box from "../Box/Box";
import Input from "./Input";
import Image from "next/image";
import Text from "../Text/Text";
import { InputGroupProps, scales, Scales, Variants } from "./types";
import { styleVariants, scaleVariants, styleTextVariants } from "./theme";

import IconComponent from "../Svg/IconComponent";

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

const getIconPosition = (scale: Scales) => {
  switch (scale) {
    case scales.LG:
      return "24px";
    case scales.MD:
      return "16px";
    case scales.SM:
    default:
      return "12px";
  }
};

const getImageSize = (scale: Scales) => {
  switch (scale) {
    case scales.LG:
      return 24;
    case scales.MD:
      return 20;
    case scales.SM:
    default:
      return 16;
  }
};

const StyledInputWrapper = styled(Box)<{
  disabled?: boolean;
}>`
  display: block;
  outline: 0;
  width: 100%;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? ".56" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};
`;

const StyledInputGroup = styled(Box)<{
  scale: Scales;
  variant?: Variants;
  hasStartIcon: boolean;
  hasEndIcon: boolean;
}>`
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

const iconCss = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const StyledIconComponent = styled(IconComponent)`
  ${() => iconCss}
`;

const LeftIconComponent = styled(StyledIconComponent)<{ scale: Scales }>`
  left: ${({ scale }) => getIconPosition(scale)};
`;

const LeftIconImage = styled(Box)<{ scale: Scales }>`
  ${() => iconCss}
  left: ${({ scale }) => `${getIconPosition(scale)}px`};
`;

const RightIconComponent = styled(StyledIconComponent)<{ scale: Scales }>`
  right: ${({ scale }) => getIconPosition(scale)};
`;

const TextDescription = styled(Text)<{ variant?: Variants }>`
  ${variant({
    prop: "variant",
    variants: styleTextVariants,
  })}
`;

const InputGroup: FC<InputGroupProps> = ({
  scale = scales.MD,
  startIcon,
  startImage,
  endIcon,
  children,
  variant,
  isError,
  isWarning,
  disabled,
  description,
  baseAwsUrl = "https://static.biswap.org/bs",
  ...props
}) => {
  return (
    <StyledInputWrapper
      width="100%"
      position="relative"
      disabled={disabled}
      {...props}
    >
      <StyledInputGroup
        scale={scale}
        variant={variant}
        width="100%"
        position="relative"
        hasStartIcon={!!startIcon || !!startImage}
        hasEndIcon={!!endIcon}
      >
        {startIcon && (
          <LeftIconComponent
            color={startIcon.color}
            iconName={startIcon.iconName}
            scale={scale}
          />
        )}
        {startImage && (
          <LeftIconImage scale={scale}>
            <Image
              width={getImageSize(scale)}
              height={getImageSize(scale)}
              src={`${baseAwsUrl}${startImage?.imageSrc}`}
              alt=""
            />
          </LeftIconImage>
        )}
        {cloneElement(children, { variant, disabled })}
        {!isError && !isWarning && endIcon && (
          <RightIconComponent
            color={endIcon.color}
            iconName={endIcon.iconName}
            scale={scale}
          />
        )}
        {isError && (
          <RightIconComponent
            iconName="CloseCircleSolid"
            color="secondary"
            scale={scale}
          />
        )}
        {isWarning && (
          <RightIconComponent
            iconName="WarningSolid"
            color="warning"
            scale={scale}
          />
        )}
      </StyledInputGroup>
      {description && (
        <TextDescription mt="4px" fontSize="12px" variant={variant}>
          {description}
        </TextDescription>
      )}
    </StyledInputWrapper>
  );
};

export default InputGroup;
