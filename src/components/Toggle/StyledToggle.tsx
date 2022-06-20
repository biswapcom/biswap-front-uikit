import styled from "styled-components";

import {
  ToggleProps,
  HandleProps,
  InputProps,
  ScaleKeys,
  scales,
  StyleToggleProps,
} from "./types";
import { gridArea } from "styled-system";

const scaleKeyValues = {
  // sm: {},
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
  // lg: {},
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.MD }: ToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const ToggleWrap = styled.label<{
  labelOrientation?: string;
  disabled?: boolean;
  gridArea?: string;
  spaceBetween?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  width: ${({ spaceBetween }) => (spaceBetween ? "100%" : "auto")};
  flex-direction: ${({ labelOrientation }) =>
    labelOrientation === "left"
      ? "row-reverse"
      : labelOrientation === "right"
      ? "row"
      : "row"};
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : "start"};
  opacity: ${({ disabled }) => (disabled ? "0.32" : "1")};
  grid-area: ${({ gridArea }) => gridArea || "initial"};
`;
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

export const Label = styled.span<{
  labelOrientation?: string;
  isChecked: boolean;
  disabled?: boolean;
  variant?: string;
}>`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.dark800 : theme.colors.gray900};

  color: ${({ theme, variant, isChecked }) =>
    variant === "dark" && isChecked
      ? theme.colors.white
      : variant === "light" && isChecked
      ? theme.colors.dark800
      : theme.colors.gray900};

  margin: ${({ labelOrientation }) =>
    labelOrientation === "left" ? "0 8px 0 0" : "0 0 0 8px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.2s ease-in-out;
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
  transition: background-color 0.2s ease-in-out;
  width: ${getScale("toggleWidth")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default StyledToggle;
