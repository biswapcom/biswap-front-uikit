import React, { FC } from "react";
import styled from "styled-components";

const DividerElement = styled.div<{
  color?: string;
  size?: string;
}>`
  width: 100%;
  border: ${({ theme, size, color }) =>
    // @ts-ignore
    `${size} solid ${theme.colors[color]}`};
  border-radius: 4px;
`;

const Divider: FC<{
  color?: string;
  size?: string;
}> = ({ color, size }) => {
  return <DividerElement color={color} size={size} />;
};

Divider.defaultProps = {
  color: "disabled",
  size: "1px"
};

export default Divider;
