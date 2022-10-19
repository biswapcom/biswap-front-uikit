import React from "react";

// hooks
import useWalletModalV2 from "./useWalletModalV2";

// components
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import {
  BinanceWalletIcon,
  BitKeepWalletIcon,
  BraveWalletIcon,
  Coin98WalletIcon,
  CoinbaseWalletIcon,
  ConnectWalletIcon,
  ITokenWalletIcon,
  MathWalletIcon,
  MetamaskIcon,
  SafePalWalletIcon,
  TokenPocketWalletIcon,
  TrustWalletIcon,
} from "../../components/Svg";
import { isFirefox } from "react-device-detect";

export default {
  title: "Widgets/WalletModalV2",
  argTypes: {},
};

enum ConnectorNames {
  MetaMask = "metaMask",
  Injected = "injected",
  WalletConnect = "walletConnect",
  BSC = "bsc",
  //Blocto = "blocto",
  WalletLink = "coinbaseWallet",
}

export const WalletV2: React.FC = () => {
  //  const qrCode = createQrCode(chainId, connect);
  const qrCode = null;

  const { onPresentConnectModalV2 } = useWalletModalV2(
    // @ts-ignore
    () => null,
    [
      {
        id: "metamask",
        title: "Metamask",
        icon: MetamaskIcon,
        // @ts-ignore
        installed:
          typeof window !== "undefined" && Boolean(window.ethereum?.isMetaMask),
        connectorId: ConnectorNames.MetaMask,
        deepLink: "https://metamask.app.link/dapp/biswap.org/",
        qrCode,
        downloadLink: "https://metamask.app.link/dapp/biswap.org/",
      },
      {
        id: "binance",
        title: "Binance Wallet",
        icon: BinanceWalletIcon,
        // @ts-ignore
        installed:
          typeof window !== "undefined" && Boolean(window.BinanceChain),
        connectorId: ConnectorNames.BSC,
        guide: {
          desktop: "https://www.bnbchain.org/en/binance-wallet",
        },
        downloadLink: {
          desktop: isFirefox
            ? "https://addons.mozilla.org/en-US/firefox/addon/binance-chain/?src=search"
            : "https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp",
        },
      },
      {
        id: "coinbase",
        title: "Coinbase Wallet",
        icon: CoinbaseWalletIcon,
        connectorId: ConnectorNames.WalletLink,
      },
      {
        id: "trust",
        title: "Trust Wallet",
        icon: TrustWalletIcon,
        connectorId: ConnectorNames.Injected,
        installed:
          typeof window !== "undefined" &&
          // @ts-ignore
          !window.ethereum?.isSafePal && // SafePal has isTrust flag
          // @ts-ignore
          (Boolean(window.ethereum?.isTrust) ||
            // @ts-ignore
            Boolean(window.ethereum?.isTrustWallet)),
        deepLink:
          "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://biswap.org/",
        downloadLink: {
          desktop:
            "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph/related",
        },
        qrCode,
      },
      {
        id: "walletconnect",
        title: "WalletConnect",
        icon: ConnectWalletIcon,
        connectorId: ConnectorNames.WalletConnect,
      },
      // {
      //   id: "opera",
      //   title: "Opera Wallet",
      //   icon: "/images/wallets/opera.png",
      //   connectorId: ConnectorNames.Injected,
      //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isOpera),
      //   downloadLink: "https://www.opera.com/crypto/next",
      // },
      {
        id: "brave",
        title: "Brave Wallet",
        icon: BraveWalletIcon,
        connectorId: ConnectorNames.Injected,
        // @ts-ignore
        installed:
          typeof window !== "undefined" &&
          Boolean(window.ethereum?.isBraveWallet),
      },
      {
        id: "math",
        title: "MathWallet",
        icon: MathWalletIcon,
        connectorId: ConnectorNames.Injected,
        // @ts-ignore
        installed:
          typeof window !== "undefined" &&
          Boolean(window.ethereum?.isMathWallet),
        qrCode,
      },
      {
        id: "tokenpocket",
        title: "TokenPocket",
        icon: TokenPocketWalletIcon,
        connectorId: ConnectorNames.Injected,
        // @ts-ignore
        installed:
          typeof window !== "undefined" &&
          Boolean(window.ethereum?.isTokenPocket),
        qrCode,
      },
      {
        id: "safepal",
        title: "SafePal",
        icon: SafePalWalletIcon,
        connectorId: ConnectorNames.Injected,
        // @ts-ignore
        installed:
          typeof window !== "undefined" &&
          Boolean((window.ethereum as ExtendEthereum)?.isSafePal),
        qrCode,
      },
      {
        id: "coin98",
        title: "Coin98",
        icon: Coin98WalletIcon,
        connectorId: ConnectorNames.Injected,
        installed:
          typeof window !== "undefined" &&
          // @ts-ignore
          (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)),
        qrCode,
      },
      // {
      //   id: "blocto",
      //   title: "Blocto",
      //   icon: "/images/wallets/blocto.png",
      //   connectorId: ConnectorNames.Injected,
      //   installed: typeof window !== "undefined" && Boolean((window.ethereum as ExtendEthereum)?.isBlocto),
      //   qrCode,
      // },
    ]
  );

  return (
    <Flex>
      <Button onClick={onPresentConnectModalV2}>open connect modal v2</Button>
    </Flex>
  );
};
