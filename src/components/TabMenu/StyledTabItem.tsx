import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { menuScaleVariants, menuStyleVariants } from "./theme";
import { TabBarItemProps } from "./types";

interface ThemedTabProps extends TabBarItemProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedTabProps {
  disabled?: boolean;
}

const getDisabledStyles = ({ disabled }: TransientButtonProps) => {
  if (disabled === true) {
    return `
      &:disabled,
      &.button--disabled {
        opacity: .32;
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

const StyledTabItem = styled.button<TabBarItemProps>`
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
