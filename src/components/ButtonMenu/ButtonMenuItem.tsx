import React, { ElementType } from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import { styleVariants, scaleVariants } from "./theme";
import Button from "../Button/Button";
import { BaseButtonMenuItemProps, ButtonMenuItemProps } from "./types";
import { variants } from "./types";
import { PolymorphicComponent } from "../../util/polymorphic";

interface InactiveButtonProps extends BaseButtonMenuItemProps {
  forwardedAs: BaseButtonMenuItemProps["as"];
  colorKey: "pastelBlue" | "text";
}

const InactiveButton: PolymorphicComponent<
  InactiveButtonProps,
  "button"
> = styled(Button)<InactiveButtonProps>`
  align-items: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  //font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  background-color: transparent;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const MenuItemButton: PolymorphicComponent<
  BaseButtonMenuItemProps,
  "button"
> = styled.button<BaseButtonMenuItemProps>`
  align-items: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  //font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  ${variant({
    variants: styleVariants,
  })}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.SELECT,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        variant={variant}
        colorKey={variant === variants.SELECT ? "pastelBlue" : "text"}
        {...props}
      />
    );
  }

  return <MenuItemButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
