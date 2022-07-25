import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import circle from "./circle.svg";
import { Flex } from "../Box";

const getBaseThumbStyles = () => `
  -webkit-appearance: none;
  background-image: url(${circle});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  width: 20px;
  height: 20px;
  transition: 200ms transform;
  transform: translateY(2px);

  &:hover {
    transform: scale(1.1) translateY(2px);
  }
`;

export const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  &::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  &::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<{
  darkMode?: boolean;
  disabled: boolean;
}>`
  background-color: ${({ theme, disabled, darkMode }) =>
    theme.colors[disabled ? "textDisabled" : darkMode ? "dark400" : "gray300"]};
  height: 4px;
  position: absolute;
  top: 10px;
  width: calc(100% - 8px);
  border-radius: 20px;
`;

export const BarProgress = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 4px;
  margin-left: 2px;
  position: absolute;
  top: 10px;
`;

export const PointsContainer = styled(Flex)`
  position: relative;
  top: -16px;
`;

export const PercentSliderLabel = styled(Flex)<{
  left: number;
  bannerPosition: "top" | "bottom";
}>`
  align-items: center;
  position: absolute;
  ${({ bannerPosition }) =>
    bannerPosition === "top" ? "top: 0" : "bottom: 0"};
  left: ${({ left }) => `${left}%`};
  transform: translateX(-50%) translateY(calc(${({ bannerPosition }) =>
    bannerPosition === "top" ? "-100% - 10px" : "100%"}));
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.tooltip};
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    ${({ bannerPosition }) =>
      bannerPosition === "top" ? "bottom: 0" : "top: 0"};
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: translate(-50%, ${({ bannerPosition }) =>
      bannerPosition === "top" ? "100%" : "-100%"});
    ${({ bannerPosition, theme }) =>
      `border-${bannerPosition === "top" ? "top" : "bottom"}: 6px solid ${
        theme.colors.tooltip
      }`};
`;
