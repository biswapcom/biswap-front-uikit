import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  color?: string;
  size?: string;
}

const DividerElement = styled.div<IProps>`
  width: 100%;
  border: ${({ theme, size, color }) =>
    // @ts-ignore
    `${size} solid ${theme.colors[color]}`};
  border-radius: 4px;
`;

const Divider: FC<IProps> = ({
  color = "disabled",
  size = "1px",
}): JSX.Element => {
  return <DividerElement color={color} size={size} />;
};

export default Divider;
