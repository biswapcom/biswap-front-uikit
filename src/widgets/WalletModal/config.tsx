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
import BraveWallet from "./icons/BraveWallet";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 5,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 3,
  },
  {
    title: "Binance Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "Coinbase Wallet",
    icon: CoinbaseIcon,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "iToken",
    icon: iToken,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "BitKeep Wallet",
    icon: BitKeepWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "Brave Wallet",
    icon: BraveWallet,
    connectorId: ConnectorNames.Injected,
    priority: 4,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
export const walletLocalStorageKey = "wallet";
