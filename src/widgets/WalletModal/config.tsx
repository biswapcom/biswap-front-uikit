import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";
import Coin98 from "./icons/Coin98";
import CoinbaseIcon from "./icons/Coinbase";
import iToken from "./icons/iToken";
import BitKeepWallet from "./icons/BitKeepWallet";

import { Config, ConnectorNames, ConnectorsTitleTypes, InstanceCheckRules } from "./types";

const connectors: Config[] = [
  {
    title: ConnectorsTitleTypes.Metamask,
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
    helpHref: 'https://bit.ly/3arAKkq',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.Metamask]
  },
  {
    title: ConnectorsTitleTypes.TrustWallet,
    icon: TrustWallet,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
    helpHref: 'https://bit.ly/3BwkxWo',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.TrustWallet]
  },
  {
    title: ConnectorsTitleTypes.MathWallet,
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3BI649I',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.MathWallet]
  },
  {
    title: ConnectorsTitleTypes.TokenPocket,
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 4,
    helpHref: 'https://bit.ly/3zu4yoW',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.TokenPocket]
  },
  {
    title: ConnectorsTitleTypes.Coin98,
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3PUMFGS',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.Coin98]
  },
  {
    title: ConnectorsTitleTypes.WalletConnect,
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 3,
    helpHref: 'https://bit.ly/3SnDkZR',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.WalletConnect]
  },
  {
    title: ConnectorsTitleTypes.BinanceChain,
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
    helpHref: 'https://bit.ly/3BDTLLI',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.BinanceChain]
  },
  {
    title: ConnectorsTitleTypes.SafePal,
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3zMM7gO',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.SafePal]
  },
  {
    title: ConnectorsTitleTypes.Coinbase,
    icon: CoinbaseIcon,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3oLQMcr',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.Coinbase]
  },
  {
    title: ConnectorsTitleTypes.iToken,
    icon: iToken,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3vwZP4O',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.iToken]
  },
  {
    title: ConnectorsTitleTypes.BitKeep,
    icon: BitKeepWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3nsp57T',
    instanceCheckRule: InstanceCheckRules[ConnectorsTitleTypes.BitKeep]
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
export const walletLocalStorageKey = "wallet";
