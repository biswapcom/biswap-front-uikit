import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";

export type Login<T> = (connectorId: T) => void;

export enum ConnectorsTitleTypes {
  Metamask = "Metamask",
  // TrustWallet = "TrustWallet",
  // MathWallet = "MathWallet",
  // TokenPocket = "TokenPocket",
  // Coin98 = "Coin98",
  WalletConnect = "WalletConnect",
  // BinanceChain = "Binance Chain",
  // SafePal = "SafePal Wallet",
  // Coinbase = "Coinbase Wallet",
  // iToken = "iToken",
  // BitKeep = "BitKeep Wallet",
  // BraveWallet = "Brave Wallet",
}

export enum ConnectorNames {
  // Injected = "injected",
  WalletConnect = "walletconnect",
  // BSC = "bsc",
  //  WalletLink = "walletlink",
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
