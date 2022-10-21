import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";
export declare type Login<T> = (connectorId: T) => void;
export declare enum ConnectorsTitleTypes {
    Metamask = "Metamask",
    WalletConnect = "WalletConnect",
    BinanceChain = "Binance Chain",
    SafePal = "SafePal Wallet",
    Coinbase = "Coinbase Wallet",
    iToken = "iToken",
    BitKeep = "BitKeep Wallet",
    BraveWallet = "Brave Wallet",
    Gnosis = "Gnosis Safe"
}
export declare enum ConnectorNames {
    WalletConnect = "walletconnect"
}
export interface WalletConfig<T = {}> {
    title: string;
    icon: FC<React.PropsWithChildren<SvgProps>>;
    connectorId: T;
    priority: number | (() => number);
    href?: string;
    installed?: boolean;
    downloadLink?: {
        desktop?: string;
        mobile?: string;
    };
}
