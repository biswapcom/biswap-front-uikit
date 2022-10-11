import { BoxProps, FlexProps } from "../../components/Box";
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
    bodyPadding?: string;
    minWidth?: string;
    maxWidth?: string;
    modalBackground?: string;
    closeBtnColor?: string;
    walletModal?: boolean;
    modalBodyProps?: FlexProps;
}
