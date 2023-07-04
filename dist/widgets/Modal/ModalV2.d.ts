import React from "react";
import { ModalV2Props } from "./types";
export declare const ModalV2Context: React.Context<{
    onDismiss?: (() => void) | undefined;
}>;
export declare function useModalV2(): {
    onDismiss: () => void;
    onOpen: () => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare function ModalV2({ isOpen, onDismiss, closeOnOverlayClick, children, disableOutsidePointerEvents, ...props }: ModalV2Props): React.ReactPortal | null;
