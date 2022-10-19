import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";
import { ModalProps } from "../Modal";
declare type LinkOfTextAndLink = string | {
    text: string;
    url: string;
};
declare type DeviceLink = {
    desktop?: LinkOfTextAndLink;
    mobile?: LinkOfTextAndLink;
};
declare type LinkOfDevice = string | DeviceLink;
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
interface WalletModalV2Props<T = unknown> extends ModalProps {
    wallets: WalletConfigV2<T>[];
    login: (connectorId: T) => Promise<any>;
}
export declare class WalletConnectorNotFoundError extends Error {
}
export declare class WalletSwitchChainError extends Error {
}
export declare function useSelectedWallet<T>(): [WalletConfigV2<T> | null, (update?: unknown) => void | Promise<void>];
export declare const walletLocalStorageKey = "wallet";
export declare function ConnectModalV2<T = unknown>(props: WalletModalV2Props<T>): JSX.Element;
export {};
