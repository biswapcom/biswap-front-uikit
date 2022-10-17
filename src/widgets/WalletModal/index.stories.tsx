import React from "react";

// hooks
import useWalletModal from "./useWalletModal";

// components
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import {
    BinanceWalletIcon, BitKeepWalletIcon,
    Coin98WalletIcon, CoinbaseWalletIcon, ConnectWalletIcon, ITokenWalletIcon,
    MathWalletIcon,
    MetamaskIcon, SafePalWalletIcon,
    TokenPocketWalletIcon,
    TrustWalletIcon
} from "../../components/Svg";

enum ConnectorNames {
    MetaMask = "metaMask",
    Injected = "injected",
    WalletConnect = "walletConnect",
    BSC = "bsc",
    //Blocto = "blocto",
    WalletLink = "coinbaseWallet",
}

export default {
  title: "Widgets/WalletModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentConnectModal } = useWalletModal(
    () => null,
    [
        {
            title: "Metamask",
            icon: MetamaskIcon,
            connectorId: ConnectorNames.MetaMask,
            priority: 1,
            // @ts-ignore
            installed: typeof window !== "undefined" && Boolean(window.ethereum?.isMetaMask),
            href: "https://metamask.app.link/dapp/biswap.org",
        },
        {
            title: "TrustWallet",
            icon: TrustWalletIcon,
            connectorId: ConnectorNames.Injected,
            priority: 2,
            installed:
                typeof window !== "undefined" &&
                // @ts-ignore
                (Boolean(window.ethereum?.isTrust) ||
                    // @ts-ignore
                    Boolean(window.ethereum?.isTrustWallet)),
            href: "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://biswap.org/",
            downloadLink: {
                desktop: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph/related",
            },
        },
        {
            title: "MathWallet",
            icon: MathWalletIcon,
            connectorId: ConnectorNames.Injected,
            // @ts-ignore
            installed: typeof window !== "undefined" && Boolean(window.ethereum?.isMathWallet),
            priority: () => {
                // @ts-ignore
                return typeof window !== "undefined" && Boolean(window.ethereum?.isMathWallet) ? 0 : 999;
            },
        },
        {
            title: "TokenPocket",
            icon: TokenPocketWalletIcon,
            connectorId: ConnectorNames.Injected,
            priority: () => {
                // @ts-ignore
                return typeof window !== "undefined" && Boolean(window.ethereum?.isTokenPocket) ? 0 : 999;
            },
            // @ts-ignore
            installed: typeof window !== "undefined" && Boolean(window.ethereum?.isTokenPocket),
        },
        {
            title: "Coin98",
            icon: Coin98WalletIcon,
            connectorId: ConnectorNames.Injected,
            // @ts-ignore
            installed: typeof window !== "undefined" && (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)),
            priority: () => {
                // @ts-ignore
                return typeof window !== "undefined" && (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)) ? 0 : 999;
            },
        },
        {
            title: "WalletConnect",
            icon: ConnectWalletIcon,
            connectorId: ConnectorNames.WalletConnect,
            priority: 3,
        },
        {
            title: "Binance Chain",
            icon: BinanceWalletIcon,
            connectorId: ConnectorNames.BSC,
            // @ts-ignore
            installed: typeof window !== "undefined" && Boolean(window.BinanceChain),
            priority: 999,
        },
        {
            title: "SafePal Wallet",
            icon: SafePalWalletIcon,
            connectorId: ConnectorNames.Injected,
            // @ts-ignore
            installed: typeof window !== "undefined" && Boolean(window.ethereum?.isSafePal),
            priority: () => {
                // @ts-ignore
                return typeof window !== "undefined" && Boolean(window.ethereum?.isSafePal) ? 0 : 999;
            },
        },
        {
            title: "Coinbase Wallet",
            icon: CoinbaseWalletIcon,
            connectorId: ConnectorNames.WalletLink,
            priority: 999,
        },
        {
            title: "iToken",
            icon: ITokenWalletIcon,
            connectorId: ConnectorNames.Injected,
            priority: 999,
        },
        {
            title: "BitKeep Wallet",
            icon: BitKeepWalletIcon,
            connectorId: ConnectorNames.Injected,
            priority: 999,
        },
    ]
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
    </Flex>
  );
};
