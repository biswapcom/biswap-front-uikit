import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import circle from "./circle.svg";
import {Flex} from "../Box";

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ disabled }: InputHTMLAttributes<HTMLInputElement>) => `
  -webkit-appearance: none;
  background-image: url(${circle});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 20px;
  height: 20px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transition: 200ms transform;
  transform: translateY(4px);

  &:hover {
    transform: ${disabled ? "scale(1) translateY(4px)" : "scale(1.1) translateY(4px)"};
  }
`;

export const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;

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

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "gray900"]};
  height: 4px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 4px;
  position: absolute;
  top: 18px;
`;

export const PointsContainer = styled(Flex)`
  position: relative;
  top: -20px;
`
