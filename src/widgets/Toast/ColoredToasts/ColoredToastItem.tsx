import React, { FC } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

//components
import { BodyText } from "../../../components/Typography";
import { IconComponent } from "../../../components/IconComponent";
import { Box, Flex } from "../../../components/Box";

//types
import { ColoredToastProps, ToastProps } from "../types";
import { coloredVariants, ColoredVariants } from "../../../components/Alert";

const StyledToast = styled(Box)<{ type?: ColoredVariants }>`
  position: fixed;
  right: auto;
  left: 16px;
  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1),
    0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  z-index: 1000;

  background: ${({ theme, type }) =>
    type === coloredVariants.DANGER
      ? theme.colors.secondary
      : theme.colors.success};
  padding: 16px 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    transform: translate(-50%, 0);
    left: 50%;
  }
`;

interface ColoredToastItemProps
  extends Pick<ToastProps, "onRemove" | "ttl" | "style"> {
  toast: ColoredToastProps;
}

const ColoredToastItem: FC<ColoredToastItemProps> = ({
  toast,
  style,
  ...props
}) => {
  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast left="50%" type={toast.type}>
        <Flex alignItems="center">
          <IconComponent
            iconName={
              toast.type === coloredVariants.DANGER ? "Warning" : "Check"
            }
            color="white"
            width="26px"
          />
          <BodyText bold color="white" ml="12px">
            {toast.title}
          </BodyText>
        </Flex>
      </StyledToast>
    </CSSTransition>
  );
};

export default ColoredToastItem;
