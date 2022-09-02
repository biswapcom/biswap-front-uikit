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

import { Config, ConnectorNames, ConnectorsNameTypes, InstanceCheckRules } from "./types";

const connectors: Config[] = [
  {
    title: ConnectorsNameTypes.Metamask,
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
    helpHref: 'https://bit.ly/3arAKkq',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.Metamask]
  },
  {
    title: ConnectorsNameTypes.TrustWallet,
    icon: TrustWallet,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
    helpHref: 'https://bit.ly/3BwkxWo',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.TrustWallet]
  },
  {
    title: ConnectorsNameTypes.MathWallet,
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3BI649I',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.MathWallet]
  },
  {
    title: ConnectorsNameTypes.TokenPocket,
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 4,
    helpHref: 'https://bit.ly/3zu4yoW',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.TokenPocket]
  },
  {
    title: ConnectorsNameTypes.Coin98,
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3PUMFGS',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.Coin98]
  },
  {
    title: ConnectorsNameTypes.WalletConnect,
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 3,
    helpHref: 'https://bit.ly/3SnDkZR',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.WalletConnect]
  },
  {
    title: ConnectorsNameTypes.BinanceChain,
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
    helpHref: 'https://bit.ly/3BDTLLI',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.BinanceChain]
  },
  {
    title: ConnectorsNameTypes.SafePal,
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3zMM7gO',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.SafePal]
  },
  {
    title: ConnectorsNameTypes.Coinbase,
    icon: CoinbaseIcon,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3oLQMcr',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.Coinbase]
  },
  {
    title: ConnectorsNameTypes.iToken,
    icon: iToken,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3vwZP4O',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.iToken]
  },
  {
    title: ConnectorsNameTypes.BitKeep,
    icon: BitKeepWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3nsp57T',
    instanceCheckRule: InstanceCheckRules[ConnectorsNameTypes.BitKeep]
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
export const walletLocalStorageKey = "wallet";
