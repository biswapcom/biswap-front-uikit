import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare enum ConnectorsNameTypes {
    Metamask = "Metamask",
    TrustWallet = "TrustWallet",
    MathWallet = "MathWallet",
    TokenPocket = "TokenPocket",
    Coin98 = "Coin98",
    WalletConnect = "WalletConnect",
    BinanceChain = "Binance Chain",
    SafePal = "SafePal Wallet",
    Coinbase = "Coinbase Wallet",
    iToken = "iToken",
    BitKeep = "BitKeep Wallet"
}
export declare enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc",
    WalletLink = "walletlink"
}
export declare const InstanceCheckRules: {
    Metamask: string;
    TrustWallet: string;
    MathWallet: string;
    TokenPocket: string;
    Coin98: string;
    WalletConnect: string;
    "Binance Chain": string;
    "SafePal Wallet": string;
    "Coinbase Wallet": string;
    iToken: string;
    "BitKeep Wallet": string;
};
export declare type Login = (connectorId: ConnectorNames, walletName: string) => void;
export interface Config {
    priority: number;
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
    helpHref: string;
    instanceCheckRule: string;
}
