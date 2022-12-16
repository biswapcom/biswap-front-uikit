import styled from "styled-components";
import { Box } from "../Box";
import { MarkerType } from "../../theme";
import { keyframes } from "styled-components";

const PULSE_SUCCESS = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);
  }
`;
const PULSE_WARNING = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);
  }
`;
const PULSE_PRIMARY = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);
  }
`;
const PULSE_SECONDARY = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);
  }
`;
const PULSES: any = {
  PRIMARY: PULSE_PRIMARY,
  SECONDARY: PULSE_SECONDARY,
  WARNING: PULSE_WARNING,
  SUCCESS: PULSE_SUCCESS,
} as const;

const Marker = styled(Box)<{ color?: keyof MarkerType }>`
  position: absolute;
  top: 0;
  right: -4px;
  width: 6px;
  height: 6px;
  transform: translateX(100%);
  border-radius: 50%;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.success};

  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: -2px;
    left: -2px;
    z-index: 1;
    // @ts-ignore
    animation: ${({ color }) =>
        color ? PULSES[color.toUpperCase()] : PULSE_SUCCESS}
      2s infinite;
  }
`;

export default Marker;
