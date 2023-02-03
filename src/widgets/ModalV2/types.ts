import { BoxProps, FlexProps } from "../../components/Box";
import { Scales } from "../../components/Heading/types";
import { ReactNode } from "react";

// export interface ModalTheme {
//   background: string;
// }

export type Handler = () => void;

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

  // titleSize?: Scales;
  // walletModal?: boolean;
  // modalBodyProps?: FlexProps;
}
