import React, { createContext, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "../../components/Overlay";
import getPortalRoot from "../../util/getPortalRoot";
import { ModalWrapper } from "./styles";
import Modal from "./Modal";
import { ModalV2Props } from "./types";

export const ModalV2Context = createContext<{
  onDismiss?: () => void;
}>({});

export function useModalV2() {
  const [isOpen, setIsOpen] = useState(false);

  const onDismiss = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);

  return {
    onDismiss,
    onOpen,
    isOpen,
    setIsOpen,
  };
}

export function ModalV2({
  isOpen,
  onDismiss,
  closeOnOverlayClick,
  children,
  disableOutsidePointerEvents = true,
  ...props
}: ModalV2Props) {
  const handleOverlayDismiss = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (closeOnOverlayClick) {
      onDismiss?.();
    }
  };
  const portal = getPortalRoot();

  if (portal) {
    return createPortal(
      <ModalV2Context.Provider value={{ onDismiss }}>
        {isOpen && (
          <ModalWrapper {...props}>
            <Overlay onClick={handleOverlayDismiss} />
            <Modal {...props} onDismiss={() => handleOverlayDismiss}>
              {children}
            </Modal>
          </ModalWrapper>
        )}
      </ModalV2Context.Provider>,
      portal
    );
  }

  return null;
}
