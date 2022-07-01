import React from "react";
import styled from "styled-components";

const DividerElement = styled.div<{ size?: string }>`
  width: 100%;
  border: ${({ theme, size }) =>
    `${size ?? "1px"} solid ${theme.colors.disabled}`};
  border-radius: 4px;
`;

const DividerLine: React.FC<{ size?: string }> = ({ size }) => (
  <DividerElement size={size} />
);

DividerLine.defaultProps = {
  size: "1px",
};

export default DividerLine;
