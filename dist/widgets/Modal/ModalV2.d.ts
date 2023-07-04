import React from "react";
import { ModalProps } from "./types";
export interface ModalV2Props extends ModalProps {
    isOpen?: boolean;
    closeOnOverlayClick?: boolean;
    children?: React.ReactNode;
    disableOutsidePointerEvents?: boolean;
}
export declare const ModalV2Context: React.Context<{
    onDismiss?: (() => void) | undefined;
}>;
export declare type UseModalV2Props = ReturnType<typeof useModalV2>;
export declare function useModalV2(): {
    onDismiss: () => void;
    onOpen: () => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare function ModalV2({ isOpen, onDismiss, closeOnOverlayClick, children, disableOutsidePointerEvents, ...props }: ModalV2Props): React.ReactPortal | null;
