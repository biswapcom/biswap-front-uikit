import React, { FC } from "react";
import styled from "styled-components";

interface ExpandableIconProps {
  isOpen: boolean;
  Icon: any;
  color?: string;
  width?: string;
}
type ExpandableStyleIconProps = Omit<ExpandableIconProps, "Icon">;

const ExpandableIcon: FC<ExpandableIconProps> = ({
  isOpen,
  Icon,
  color = "primary",
  width = "24px",
}) => {
  const StyledChevron = styled(Icon)<ExpandableStyleIconProps>`
    transition: transform 3s ease;
    transform: scale(${({ isOpen }) => (isOpen ? -1 : 1)});
  `;

  return <StyledChevron isOpen={isOpen} color={color} width={width} />;
};

export default ExpandableIcon;
