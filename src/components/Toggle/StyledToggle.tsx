import styled from "styled-components";
import getRgba from "../../util/getRgba";

import {
  ToggleProps,
  HandleProps,
  InputProps,
  ScaleKeys,
  scales,
  StyleToggleProps,
} from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "36px",
  },
  // TODO now used only MD scale
  md: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "40px",
  },
  lg: {
    handleHeight: "32px",
    handleWidth: "32px",
    handleLeft: "4px",
    handleTop: "4px",
    checkedLeft: "calc(100% - 36px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: ToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const Handle = styled.div<HandleProps>`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(7, 22, 45, 0.16);
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;
  margin: 0;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }
`;

const StyledToggle = styled.div<StyleToggleProps>`
  background-color: ${({ theme, $checked, $checkedColor, $defaultColor }) =>
    theme.colors[$checked ? $checkedColor : $defaultColor]};
  align-items: center;
  border-radius: 26px;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
  opacity: ${({ disabled }) => (disabled ? "0.32" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default StyledToggle;
