import styled, { css, keyframes } from "styled-components";
import { space } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { SvgProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const Svg = styled.svg.attrs(
  ({ width = "20px", xmlns = "http://www.w3.org/2000/svg", ...props }) => ({
    width,
    xmlns,
    ...props,
  })
)<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ theme, color = "gray900" }) =>
    getThemeValue(`colors.${color}`, color)(theme)};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}
  ${space}
`;

export default Svg;
