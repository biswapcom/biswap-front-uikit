import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowLeftIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 24px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 32px 24px;
  }
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

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
      <ArrowLeftIcon color="primary" />
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
  border-radius: 16px;
  width: ${({ width }) => width ?? "100%"};
  z-index: ${({ theme }) => theme.zIndices.modal};
  ${({ walletModal }) => !walletModal && `
    max-height: 100vh;
    overflow-y: auto;
  `}

  ${({ theme }) => theme.mediaQueries.sm} {
    width: ${({ maxWidth }) => maxWidth || "100%"};
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
