import styled from "styled-components";

const Divider = styled.div<{
  color?: string;
  size?: string;
}>`
  width: 100%;
  border: ${({ theme, size, color }) =>
    // @ts-ignore
    `${size} solid ${theme.colors[color]}`};
  border-radius: 4px;
`;

Divider.defaultProps = {
  color: "disabled",
  size: "1px"
};

export default Divider;
