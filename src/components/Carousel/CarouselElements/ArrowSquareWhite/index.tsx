import React, { FC } from "react";
import styled, { css } from "styled-components";
import { ICarouselButtonProps } from "../../types";

const ArrowButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
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
  navPadding?: number;
}>`
  left: ${({ navPadding }) => (navPadding ? `${navPadding}px` : "4px")};
  transform: translate(0, -50%);
  -webkit-tap-highlight-color: transparent;

  ${({ isNextButton, navPadding }) =>
    isNextButton &&
    css`
      right: ${navPadding ? `${navPadding}px` : "4px"};
      left: unset;
    `}
`;

export const ArrowSquareWhite: FC<ICarouselButtonProps> = ({
  onClick,
  children,
  isNextButton,
  navPadding,
}): JSX.Element => {
  return (
    <Wrap onClick={onClick} isNextButton={isNextButton} navPadding={navPadding}>
      {children}
    </Wrap>
  );
};
