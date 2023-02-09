import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.3s ease;
`;

export const ArrowSquareWhite: FC<ButtonProps> = ({
  onClick,
  children,
}): JSX.Element => {
  return <Button onClick={onClick}>{children}</Button>;
};