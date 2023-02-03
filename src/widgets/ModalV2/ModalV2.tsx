import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import getThemeValue from "../../util/getThemeValue";
import { ModalProps } from "./types";
import { Box } from "../../components/Box";
import { CloseIcon } from "../../components/Svg";

const getBackground = (background: string) => {
  const theme = useTheme();
  const backgroundIsImage =
    background.includes(".png") ||
    background.includes(".jpg") ||
    background.includes(".svg");

  if (backgroundIsImage) {
    return `url("${background}")`;
  }
  return getThemeValue(`colors.${background}`, background)(theme);
};

const ModalContainer = styled(Box)<{ background: string; maxWidth?: string }>`
  overflow: hidden;
  background: ${({ background }) => background};
  background-size: cover;
  width: 100%;
  max-width: none;
  z-index: ${({ theme }) => theme.zIndices.modal};
  position: relative;
  max-height: 100vh;
  overflow-y: auto;
  border-radius: 16px 16px 0 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: ${({ maxWidth }) => maxWidth};
    border-radius: 16px;
  }
`;
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  box-shadow: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 24px;
  right: 16px;
  z-index: 10;

  ${({ theme }) => theme.mediaQueries.sm} {
    top: 32px;
    right: 32px;
  }
`;
const Head = styled(Box)<{ closeBtnSize: string }>`
  padding-top: 24px;
  padding-left: 16px;
  padding-right: calc(16px + ${({ closeBtnSize }) => closeBtnSize});

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 32px;
    padding-left: 32px;
    padding-right: calc(32px + ${({ closeBtnSize }) => closeBtnSize});
  }
`;
const Body = styled(Box)<{ modalHead?: ReactNode | string }>`
  padding: ${({ modalHead }) => (modalHead ? "0 16px 24px" : "24px 16px")};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ modalHead }) => (modalHead ? "0 32px 32px" : "32px")};
  }
`;

const ModalV2: React.FC<ModalProps> = ({
  hideCloseButton = false,
  closeBtnColor = "backgroundDark",
  closeBtnSize = "24px",
  modalHead,
  children,
  withoutBodyPadding = false,
  onDismiss,
  minWidth = "320px",
  modalBackground = "white",
  maxWidth = "420px",

  onBack,
  hideOnBack,

  ...props
}) => {
  return (
    <ModalContainer
      minWidth={minWidth}
      {...props}
      background={getBackground(modalBackground)}
      maxWidth={maxWidth}
      width={props.width}
    >
      {!hideCloseButton && (
        <CloseButton onClick={onDismiss}>
          <CloseIcon width={closeBtnSize} color={closeBtnColor} />
        </CloseButton>
      )}
      {modalHead && <Head closeBtnSize={closeBtnSize}>{modalHead}</Head>}
      {withoutBodyPadding ? (
        <Box>{children}</Box>
      ) : (
        <Body modalHead={modalHead}>{children}</Body>
      )}
    </ModalContainer>
  );
};

export default ModalV2;
