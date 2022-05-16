import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant, withoutBackground }: StyledButtonMenuProps) => {
  if (withoutBackground) return "transparent";
  return theme.colors[variant === variants.WARNING ? "input" : "tertiary"];
};

const getBorderColor = ({ theme, variant, withoutBackground }: StyledButtonMenuProps) => {
  if (withoutBackground) return "transparent";
  return theme.colors[
    variant === variants.WARNING ? "inputSecondary" : "disabled"
    ];
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: ${({ flatBottom }) => (flatBottom ? "8px 8px 0 0" : "16px")};
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  border: 1px solid ${getBorderColor};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${
        variant === variants.PRIMARY
          ? theme.colors.primary
          : theme.colors.textSubtle
      };
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  flatBottom= false,
  withoutBackground= false,
  ...props
}) => {
  return (
    <StyledButtonMenu
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      flatBottom={flatBottom}
      withoutBackground={withoutBackground}
      {...props}
    >
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
          flatBottom,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
