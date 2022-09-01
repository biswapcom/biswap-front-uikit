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

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
    helpHref: 'https://bit.ly/3arAKkq'
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
    helpHref: 'https://bit.ly/3BwkxWo'
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3BI649I'
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 4,
    helpHref: 'https://bit.ly/3zu4yoW'
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3PUMFGS'
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 3,
    helpHref: 'https://bit.ly/3SnDkZR'
  },
  {
    title: "Binance Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
    helpHref: 'https://bit.ly/3BDTLLI'
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3zMM7gO'
  },
  {
    title: "Coinbase Wallet",
    icon: CoinbaseIcon,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3oLQMcr'
  },
  {
    title: "iToken",
    icon: iToken,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3vwZP4O'
  },
  {
    title: "BitKeep Wallet",
    icon: BitKeepWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
    helpHref: 'https://bit.ly/3nsp57T'
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
export const walletLocalStorageKey = "wallet";
