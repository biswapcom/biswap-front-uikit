import React from "react";
import styled, { css } from "styled-components";
import IconComponent from "../../../Svg/IconComponent";
import {IDirectionButtonProps} from "../../types";

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  height: 32px;
  border: 0;
  box-shadow: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  border-radius: 8px;
  padding: 0 6px;
`;
const Wrap = styled(ArrowButton)<{
  disabled?: boolean;
  isNextButton?: boolean;
}>`
  left: 4px;
  transform: translate(0, -50%);

  ${({ isNextButton }) =>
    isNextButton &&
    css`
      right: 4px;
      left: unset;
    `}
`;

export const DirectionButton = ({
  enabled,
  onClick,
  iconName,
  isNextButton,
}: IDirectionButtonProps) => (
  <Wrap onClick={onClick} disabled={!enabled} isNextButton={isNextButton}>
    <IconComponent iconName={iconName} color="white" height="32px" />
  </Wrap>
);
