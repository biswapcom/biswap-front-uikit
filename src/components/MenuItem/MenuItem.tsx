import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  highlightTitle,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown = href
    ? {
        as: linkComponent,
        href,
      }
    : {
        as: "div",
      };
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledMenuItem
        // @ts-ignore
        {...itemLinkProps}
        $isActive={isActive}
        $variant={variant}
        $statusColor={statusColor}
        highlightTitle={highlightTitle}
        {...props}
      >
        {children}
      </StyledMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
