import React from "react";
import styled, { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { ModalProps } from "./types";
import { useMatchBreakpoints } from "../../contexts";
import {Box} from "../../components/Box"

const ModalContainer = styled(Box)`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
`

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  hideOnBack,
  children,
  hideCloseButton = false,
  bodyPadding,
  minWidth = "320px",
  modalBackground = "white",
  closeBtnColor,
  maxWidth = "420px",
  titleSize = "lg",
  walletModal,
  modalBodyProps,
  ...props
}) => {
  const theme = useTheme();
  const { isMobile } = useMatchBreakpoints();
  const defaultBodyPadding = isMobile ? "0 16px 24px" : "0 32px 32px";

  return (
    <ModalContainer
      minWidth={minWidth}
      {...props}
      background={getThemeValue(
        `colors.${modalBackground}`,
        modalBackground
      )(theme)}
      maxWidth={maxWidth}
      width={props.width}
      borderRadius={props.borderRadius ?? "16px"}
    >

      test modal
    </ModalContainer>
  );
};

export default Modal;
