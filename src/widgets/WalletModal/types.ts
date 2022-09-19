import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorsTitleTypes {
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
  BraveWallet = "Brave Wallet",
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  WalletLink = "walletlink",
}

export const InstanceCheckRules = {
  [ConnectorsTitleTypes.Metamask]: "isMetaMask",
  [ConnectorsTitleTypes.TrustWallet]: "isTrustWallet",
  [ConnectorsTitleTypes.MathWallet]: "isMathWallet",
  [ConnectorsTitleTypes.TokenPocket]: "isTokenPocket",
  [ConnectorsTitleTypes.Coin98]: "isCoin98",
  [ConnectorsTitleTypes.WalletConnect]: "isWalletConnect",
  [ConnectorsTitleTypes.BinanceChain]: "BinanceChain",
  [ConnectorsTitleTypes.SafePal]: "isSafePal",
  [ConnectorsTitleTypes.Coinbase]: "isCoinbaseWallet",
  [ConnectorsTitleTypes.iToken]: "isiToken",
  [ConnectorsTitleTypes.BitKeep]: "isBitKeep",
  [ConnectorsTitleTypes.BraveWallet]: "isBraveWallet",
};

export type Login = (
  connectorId: ConnectorNames,
  instanceCheckRule?: InstanceCheckRuleType,
  helpHref?: string
) => void;

export type InstanceCheckRuleType =
  typeof InstanceCheckRules[ConnectorsTitleTypes];
export interface Config {
  priority: number;
  title: ConnectorsTitleTypes;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  helpHref: string;
  instanceCheckRule: InstanceCheckRuleType;
}
