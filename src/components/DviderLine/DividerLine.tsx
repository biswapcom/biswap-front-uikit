import styled from "styled-components";

const DividerLine = styled.div<{ size?: string }>`
  width: 100%;
  border: ${({ theme, size }) => `${size} solid ${theme.colors.disabled}`};
  border-radius: 4px;
`;

DividerLine.defaultProps = {
  size: "1px",
};

export default DividerLine;
