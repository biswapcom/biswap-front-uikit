import styled from "styled-components";
import { Box } from "../Box";
import getRgba from "../../util/getRgba";
import { Colors } from "../../theme";

const Marker = styled(Box)<{ color?: keyof Colors }>`
  position: absolute;
  top: 0;
  right: -4px;
  width: 6px;
  height: 6px;
  transform: translateX(100%);
  border-radius: 50%;
  background-color: ${({ theme, color }) =>
    !color ? theme.colors.success : theme.colors[color]};

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
    animation: pulse-white 2s infinite;
  }

  @keyframes pulse-white {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 ${({ theme, color }) =>
        getRgba(
          !color ? theme.colors.success : theme.colors[color],
          theme,
          0.7
        )};
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 4px rgba(51, 217, 178, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
`;

export default Marker;
