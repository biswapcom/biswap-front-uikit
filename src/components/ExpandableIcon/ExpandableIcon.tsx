import React, { FC } from "react";
import styled from "styled-components";
import { BoxProps, Flex } from "../Box";
import IconComponent from "../Svg/IconComponent";

interface ExpandableIconProps extends BoxProps {
  isOpen: boolean;
  color?: string;
  width?: string;
  iconName: string;
}

const StyledChevronWrapper = styled(Flex)<{
  isOpen: boolean;
}>`
  svg {
    transition: transform 0.3s ease;
    transform: scale(${({ isOpen }) => (isOpen ? -1 : 1)});
  }
`;

const ExpandableIcon: FC<ExpandableIconProps> = ({
  isOpen,
  color = "primary",
  width = "24px",
  iconName,
}) => {
  return (
    <StyledChevronWrapper isOpen={isOpen}>
      <IconComponent iconName={iconName} width={width} color={color} />
    </StyledChevronWrapper>
  );
};

export default ExpandableIcon;
