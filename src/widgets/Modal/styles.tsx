import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowLeftIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`;

export const ModalTitle = styled(Flex)``;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
`;

export const ModalCloseButton: React.FC<{
  onDismiss: ModalProps["onDismiss"];
  closeBtnColor?: string;
}> = ({ onDismiss, closeBtnColor }) => {
  return (
    <IconButton
      variant="text"
      onClick={onDismiss}
      scale="sm"
      aria-label="Close the dialog"
    >
      <CloseIcon color={closeBtnColor || "dark600"} width="24px" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<{
  onBack: ModalProps["onBack"];
  closeBtnColor?: string;
}> = ({ onBack, closeBtnColor }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowLeftIcon color={closeBtnColor || "primary"} />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{
  minWidth: string;
  maxWidth?: string;
  background?: string;
  walletModal?: boolean;
}>`
  overflow: hidden;
  background: ${({ background }) => background || "white"};
  width: ${({ width }) => width ?? "100%"};
  z-index: ${({ theme }) => theme.zIndices.modal};
  ${({ walletModal }) =>
    !walletModal &&
    `
    max-height: 100vh;
    overflow-y: auto;
  `}

  ${({ theme }) => theme.mediaQueries.sm} {
    width: ${({ maxWidth }) => maxWidth || "100%"};
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
