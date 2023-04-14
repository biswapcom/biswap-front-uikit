import { IDirectButtonStyled, variantsNavButton } from "../../types";
import styled, { css } from "styled-components";
import { variant } from "styled-system";

export const backgroundVariants = {
  [variantsNavButton.GRAY_OPACITY]: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  [variantsNavButton.WHITE]: {
    backgroundColor: "white",
  },
  [variantsNavButton.PRIMARY]: {
    backgroundColor: "primary",
  },
};

const ArrowButton = styled.button`
  height: 32px;
  border: 0;
  box-shadow: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  border-radius: 8px;
  padding: 0 6px;
`;

export const WrapperDirectionButton = styled(ArrowButton)<IDirectButtonStyled>`
  left: ${({ navPadding }) => `${navPadding}px`};
  transform: translate(0, -50%);
  ${variant({
    variants: backgroundVariants,
  })}
  ${({ isNextButton, navPadding }) =>
    isNextButton &&
    css`
      right: ${`${navPadding}px`};
      left: unset;
    `}
`;
