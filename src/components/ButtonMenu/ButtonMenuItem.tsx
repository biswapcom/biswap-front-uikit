import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import { styleVariants } from "./theme";
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
  background-color: transparent;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
  transition: color 0.3s ease;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const MenuItemButton = styled(Button)<BaseButtonMenuItemProps>`
  ${variant({
    variants: styleVariants,
  })}
`

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
