import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "./types";
import { ButtonMenuProps } from "./types";
import getRgba from "../../util/getRgba";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({
  theme,
  variant,
  withoutBackground,
}: StyledButtonMenuProps) => {
  if (withoutBackground) return "transparent";
  return variant === variants.SELECT
    ? theme.colors.tooltip
    : getRgba(theme.colors.pastelBlue, 0.08);
};

const getFlat = ({ flatBottom, flatTop }: StyledButtonMenuProps) => {
  if (flatBottom) return "8px 8px 0 0";
  if (flatTop) return "0 0 8px 8px";
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: ${({ flatBottom, flatTop }) =>
    flatBottom || flatTop ? getFlat : "10px"};
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: ${({ flatBottom, flatTop }) =>
    flatBottom || flatTop ? "0" : "4px"};

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
            variant === variants.SELECT
              ? theme.colors.pastelBlue
              : theme.colors.text
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
  variant = variants.SELECT,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  flatBottom = false,
  flatTop = false,
  withoutBackground = false,
  ...props
}) => {
  return (
    <StyledButtonMenu
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      flatBottom={flatBottom}
      flatTop={flatTop}
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
          flatTop,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
