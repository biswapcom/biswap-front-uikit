import React from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalContainer,
  ModalCloseButton,
  ModalBackButton,
} from "./styles";
import { ModalProps } from "./types";
import { useMatchBreakpoints } from "../../hooks";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding,
  minWidth = "320px",
  modalBackground = "white",
  closeBtnColor,
  maxWidth = "420px",
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
    >
      <ModalHeader>
        <ModalTitle>
          {onBack && (
            <ModalBackButton onBack={onBack} closeBtnColor={closeBtnColor} />
          )}
          {title && <Heading color="backgroundDark">{title}</Heading>}
        </ModalTitle>
        {!hideCloseButton && <ModalCloseButton closeBtnColor={closeBtnColor} onDismiss={onDismiss} />}
      </ModalHeader>
      <ModalBody p={bodyPadding ?? defaultBodyPadding}>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;
