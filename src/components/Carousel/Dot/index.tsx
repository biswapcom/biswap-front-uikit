import React, { FC } from "react";
import styled from "styled-components";

interface DotProps {
  selected: boolean;
  onClick: () => void;
}

const DotButton = styled.button<{ selected?: boolean }>`
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.pastelBlue};
  border: 0;
  box-shadow: none;
  border-radius: 50%;
  padding: 0;
  margin-right: 8px;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? "1" : ".32")};
  transition: opacity 0.4s ease-in-out;
`;

export const Dot: FC<DotProps> = ({ selected, onClick }): JSX.Element => {
  return <DotButton selected={selected} type="button" onClick={onClick} />;
};
