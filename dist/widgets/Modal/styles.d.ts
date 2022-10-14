import React from "react";
import { ModalProps } from "./types";
export declare const ModalHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalTitle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const ModalCloseButton: React.FC<{
    onDismiss: ModalProps["onDismiss"];
    closeBtnColor?: string;
}>;
export declare const ModalBackButton: React.FC<{
    onBack: ModalProps["onBack"];
    closeBtnColor?: string;
}>;
export declare const ModalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & {
    minWidth: string;
    maxWidth?: string | undefined;
    background?: string | undefined;
    walletModal?: boolean | undefined;
}, never>;
