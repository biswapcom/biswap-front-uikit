import React from "react";
import { BoxProps, FlexProps } from "../../components/Box";
import { Scales } from "../../components/Heading/types";
export interface ModalTheme {
    background: string;
}
export declare type Handler = () => void;
export interface InjectedProps {
    onDismiss?: Handler;
}
export interface ModalProps extends InjectedProps, BoxProps {
    title?: string;
    hideCloseButton?: boolean;
    onBack?: () => void;
    hideOnBack?: boolean;
    bodyPadding?: string;
    minWidth?: string;
    maxWidth?: string;
    modalBackground?: string;
    closeBtnColor?: string;
    titleSize?: Scales;
    walletModal?: boolean;
    modalBodyProps?: FlexProps;
    titleColor?: string;
    hideHeader?: boolean;
}
export interface ModalV2Props extends ModalProps {
    isOpen?: boolean;
    closeOnOverlayClick?: boolean;
    children?: React.ReactNode;
    disableOutsidePointerEvents?: boolean;
}
