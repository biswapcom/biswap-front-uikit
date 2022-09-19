import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare enum ConnectorsTitleTypes {
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
    BitKeep = "BitKeep Wallet",
    BraveWallet = "Brave Wallet"
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
    "Brave Wallet": string;
};
export declare type Login = (connectorId: ConnectorNames, instanceCheckRule?: InstanceCheckRuleType, helpHref?: string) => void;
export declare type InstanceCheckRuleType = typeof InstanceCheckRules[ConnectorsTitleTypes];
export interface Config {
    priority: number;
    title: ConnectorsTitleTypes;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
    helpHref: string;
    instanceCheckRule: InstanceCheckRuleType;
}
