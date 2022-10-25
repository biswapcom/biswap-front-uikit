import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";
import {ModalProps} from "../Modal";

export type WalletConfigV2<T = unknown> = {
  id: string;
  title: string;
  icon: string | FC<React.PropsWithChildren<SvgProps>>;
  connectorId: T;
  deepLink?: string;
  installed?: boolean;
  guide?: LinkOfDevice;
  downloadLink?: LinkOfDevice;
  mobileOnly?: boolean;
  qrCode?: () => Promise<string>;
};
export type LinkOfTextAndLink = string | { text: string; url: string };

export type DeviceLink = {
  desktop?: LinkOfTextAndLink;
  mobile?: LinkOfTextAndLink;
};

export type LinkOfDevice = string | DeviceLink;

export class WalletConnectorNotFoundError extends Error {}

export class WalletSwitchChainError extends Error {}

export interface WalletModalV2Props<T = unknown> extends ModalProps {
  wallets: WalletConfigV2<T>[];
  login: (connectorId: T) => Promise<any>;
  onDismiss: () => void;
}