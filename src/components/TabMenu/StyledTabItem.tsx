import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { menuScaleVariants, menuStyleVariants } from "./theme";
import { BaseButtonProps } from "../Button";

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

const StyledTabItem = styled.button<BaseButtonProps>`
  background-color: transparent;
  align-items: flex-start;
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
  z-index: 2;
  transition: color 0.3s ease;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: menuScaleVariants,
  })}
  ${variant({
    variants: menuStyleVariants,
  })}
  ${layout}
  ${space}
`;

export default StyledTabItem;
