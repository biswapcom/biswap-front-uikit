import React, { ReactNode } from "react";
import styled from "styled-components";
import { CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  hideCloseButton?: boolean;
  backBtnColor?: string;
  background?: string;
  backgroundTransparent?: boolean;
  p?: string;
  children: ReactNode;
}

const StyledModal = styled.div<{ backgroundTransparent?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, backgroundTransparent }) =>
    backgroundTransparent ? "transparent" : theme.colors.contrast};
  border-radius: 16px 16px 0 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  position: relative;
  top: 0;
  left: 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    min-width: 416px;
    max-width: 100%;
    border-radius: 16px;
  }
`;

const StyledIconButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 24px;
  left: calc(100% - 40px);

  ${({ theme }) => theme.mediaQueries.sm} {
    top: 32px;
    left: calc(100% - 56px);
  }
`;

const ModalBody = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => padding || "0 16px 24px"};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ padding }) => padding || "0 32px 32px"};
  }
`;

const Background = styled.img`
  width: 100%;
`;

const ModalWithBackground: React.FC<Props> = ({
  onDismiss,
  children,
  hideCloseButton = false,
  backBtnColor,
  background,
  backgroundTransparent,
  p,
}) => (
  <StyledModal backgroundTransparent={backgroundTransparent}>
    {!hideCloseButton && (
      <StyledIconButton
        variant="text"
        className="closeModal"
        scale="sm"
        onClick={onDismiss}
        aria-label="Close the dialog"
      >
        <CloseIcon width="24px" color={backBtnColor ?? "card"} />
      </StyledIconButton>
    )}
    {background && <Background src={background} alt="image" />}
    <ModalBody padding={p}>{children}</ModalBody>
  </StyledModal>
);

export default ModalWithBackground;
