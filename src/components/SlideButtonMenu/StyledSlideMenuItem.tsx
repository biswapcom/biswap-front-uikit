import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { BaseButtonProps } from "../Button";
import { slideMenuScaleVariants, slideMenuStyleVariants } from "./theme";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      opacity: .32;
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledSlideMenuItem = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  margin: 0;
  transition: background-color 0.2s, opacity 0.2s;
  z-index: 2;
  //padding: 0;

  //&:hover {
  //   //margin: 0;
  //   padding: 0;
  //   //border: 0;
  // }

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: slideMenuScaleVariants,
  })}
  ${variant({
    variants: slideMenuStyleVariants,
  })}
  ${layout}
  ${space}
`;

export default StyledSlideMenuItem;
