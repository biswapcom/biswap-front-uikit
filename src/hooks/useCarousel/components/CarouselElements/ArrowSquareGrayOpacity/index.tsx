import React from "react";
import styled from "styled-components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../../../../components/Svg";

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
const PrevWrap = styled(ArrowButton)<{ disabled?: boolean }>`
  left: 4px;
  transform: translate(0, -50%);
`;
const NextWrap = styled(ArrowButton)<{ disabled?: boolean }>`
  right: 4px;
  transform: translate(0, -50%);
`;
export const PrevButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <PrevWrap onClick={onClick} disabled={!enabled}>
    <ChevronLeftIcon color="white" height="32px" />
  </PrevWrap>
);

export const NextButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <NextWrap onClick={onClick} disabled={!enabled}>
    <ChevronRightIcon color="white" height="32px" />
  </NextWrap>
);
