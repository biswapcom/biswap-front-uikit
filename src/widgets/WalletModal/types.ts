import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorsNameTypes { 
  Metamask = 'Metamask',
  TrustWallet = 'TrustWallet',
  MathWallet = 'MathWallet',
  TokenPocket = 'TokenPocket',
  Coin98 = 'Coin98',
  WalletConnect = 'WalletConnect',
  BinanceChain = 'Binance Chain',
  SafePal = 'SafePal Wallet',
  Coinbase = 'Coinbase Wallet',
  iToken = 'iToken',
  BitKeep = "BitKeep Wallet",
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  WalletLink = "walletlink",
}

export const InstanceCheckRules = {
  [ConnectorsNameTypes.Metamask]: 'isMetaMask',
  [ConnectorsNameTypes.TrustWallet]: 'isTrustWallet',
  [ConnectorsNameTypes.MathWallet]: 'isMathWallet',
  [ConnectorsNameTypes.TokenPocket]: 'isTokenPocket',
  [ConnectorsNameTypes.Coin98]: 'isCoin98',
  [ConnectorsNameTypes.WalletConnect]: 'isWalletConnect',
  [ConnectorsNameTypes.BinanceChain]: 'BinanceChain',
  [ConnectorsNameTypes.SafePal]: 'isSafePal',
  [ConnectorsNameTypes.Coinbase]: 'isCoinbase',
  [ConnectorsNameTypes.iToken]: 'isiToken',
  [ConnectorsNameTypes.BitKeep]: 'isBitKeep',
}

export type Login = (connectorId: ConnectorNames, instanceCheckRule: InstanceCheckRuleType, helpHref: string) => void;

export type InstanceCheckRuleType = typeof InstanceCheckRules[ConnectorsNameTypes]
export interface Config {
  priority: number;
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  helpHref: string;
  instanceCheckRule: InstanceCheckRuleType;
}
