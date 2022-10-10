import React from "react";
import { ModalProps } from "./types";
export declare const ModalHeader: any;
export declare const ModalTitle: any;
export declare const ModalBody: any;
export declare const ModalCloseButton: React.FC<{
    onDismiss: ModalProps["onDismiss"];
    closeBtnColor?: string;
}>;
export declare const ModalBackButton: React.FC<{
    onBack: ModalProps["onBack"];
    closeBtnColor?: string;
}>;
export declare const ModalContainer: any;
