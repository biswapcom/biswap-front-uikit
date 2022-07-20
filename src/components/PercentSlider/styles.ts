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

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<{ disabled: boolean }>`
  background-color: ${({ theme, disabled }) =>
    theme.colors[disabled ? "textDisabled" : "gray300"]};
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
