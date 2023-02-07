import React, { FC } from "react";
import styled from "styled-components";
import { Flex } from "../Box";
import IconComponent from "../Svg/IconComponent";
import { ExpandableIconProps, Scale, variantRotate } from "./type";

const getScale = ({
  rotateType,
  isOpen,
}: {
  rotateType: Scale;
  isOpen: boolean;
}) => {
  switch (rotateType) {
    case variantRotate.ROTATE_V1:
      return `scale(1, ${isOpen ? -1 : 1})`;
    case variantRotate.ROTATE_V2:
    default:
      return `scale(${isOpen ? -1 : 1})`;
  }
};

const StyledChevronWrapper = styled(Flex)<{
  isOpen: boolean;
  rotateType: Scale;
}>`
  svg {
    transition: transform 0.3s ease;
    transform: ${getScale};
`;

const ExpandableIcon: FC<ExpandableIconProps> = ({
  isOpen,
  color = "primary",
  width = "24px",
  iconName,
  rotateType = variantRotate.ROTATE_V2,
  ...props
}) => {
  return (
    <StyledChevronWrapper isOpen={isOpen} rotateType={rotateType} {...props}>
      <IconComponent iconName={iconName} width={width} color={color} />
    </StyledChevronWrapper>
  );
};

export default ExpandableIcon;
