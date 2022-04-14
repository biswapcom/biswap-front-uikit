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
import {ModalProps} from "./types";


const Modal: React.FC<ModalProps> = ({
                                       title,
                                       onDismiss,
                                       onBack,
                                       children,
                                       hideCloseButton = false,
                                       bodyPadding = "24px",
                                       minWidth = "320px",
                                       modalBackground = "white",
                                       closeBtnColor,
                                       maxWidth,
                                       ...props
                                     }) => {
  const theme = useTheme();
  return (
    <ModalContainer minWidth={minWidth} {...props}
                    background={getThemeValue(
                      `colors.${modalBackground}`,
                      modalBackground
                    )(theme)}
                    maxWidth={maxWidth}
    >
      <ModalHeader>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} closeBtnColor={closeBtnColor}/>}
          { title &&
              <Heading>{title}</Heading>
          }
        </ModalTitle>
        {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss}/>}
      </ModalHeader>
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;
