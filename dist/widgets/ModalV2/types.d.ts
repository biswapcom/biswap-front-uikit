import { BoxProps } from "../../components/Box";
import { ReactNode } from "react";
export declare type Handler = () => void;
export interface InjectedProps {
    onDismiss?: Handler;
}
export interface ModalProps extends InjectedProps, BoxProps {
    hideCloseButton?: boolean;
    closeBtnColor?: string;
    closeBtnSize?: string;
    modalHead?: ReactNode | string;
    withoutBodyPadding?: boolean;
    children?: ReactNode;
    minWidth?: string;
    maxWidth?: string;
    modalBackground?: string;
    onBack?: () => void;
    hideOnBack?: boolean;
}
