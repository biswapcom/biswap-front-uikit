import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";
import { ModalProps } from "../Modal";
export declare type WalletConfigV2<T = unknown> = {
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
export declare type LinkOfTextAndLink = string | {
    text: string;
    url: string;
};
export declare type DeviceLink = {
    desktop?: LinkOfTextAndLink;
    mobile?: LinkOfTextAndLink;
};
export declare type LinkOfDevice = string | DeviceLink;
export declare class WalletConnectorNotFoundError extends Error {
}
export declare class WalletSwitchChainError extends Error {
}
export interface WalletModalV2Props<T = unknown> extends ModalProps {
    wallets: WalletConfigV2<T>[];
    login: (connectorId: T) => Promise<any>;
    onDismiss: () => void;
}
