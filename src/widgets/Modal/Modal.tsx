import React, { useContext } from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import { Flex } from "../../components/Box";
import getThemeValue from "../../util/getThemeValue";
import {
  ModalBody,
  ModalTitle,
  ModalContainer,
  ModalCloseButton,
  ModalBackButton,
} from "./styles";
import { ModalProps } from "./types";

// contexts
import { useMatchBreakpoints } from "../../contexts";
import { ModalV2Context } from "./ModalV2";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss: onDismiss_,
  onBack,
  hideOnBack,
  children,
  hideCloseButton = false,
  bodyPadding,
  headerPadding,
  minWidth = "320px",
  modalBackground = "white",
  closeBtnColor,
  maxWidth = "420px",
  titleSize = "lg",
  walletModal,
  modalBodyProps,
  hideHeader,
  titleColor = "backgroundDark",
  ...props
}) => {
  const theme = useTheme();
  const { isMobile } = useMatchBreakpoints();
  const defaultBodyPadding = isMobile ? "0 16px 24px" : "0 32px 32px";

  const context = useContext(ModalV2Context);
  const onDismiss = context?.onDismiss || onDismiss_;

  const hp = isMobile ? "24px 16px 16px" : "32px 32px 24px";
  return (
    <ModalContainer
      minWidth={minWidth}
      {...props}
      background={getThemeValue(
        `colors.${modalBackground}`,
        modalBackground
      )(theme)}
      maxWidth={maxWidth}
      walletModal={walletModal}
      width={props.width}
      borderRadius={props.borderRadius ?? "16px"}
    >
      {!hideHeader && (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p={headerPadding ?? hp}
        >
          {!hideOnBack && onBack && (
            <ModalBackButton onBack={onBack} closeBtnColor={closeBtnColor} />
          )}
          <ModalTitle>
            {title && (
              <Heading scale={titleSize} color={titleColor}>
                {title}
              </Heading>
            )}
          </ModalTitle>
          {!hideCloseButton && (
            <ModalCloseButton
              closeBtnColor={closeBtnColor}
              onDismiss={onDismiss}
            />
          )}
        </Flex>
      )}
      <ModalBody p={bodyPadding ?? defaultBodyPadding} {...modalBodyProps}>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
