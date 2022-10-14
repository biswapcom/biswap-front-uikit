import React from "react";

// hooks
import useWalletModal from "./useWalletModal";

// components
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import { MetamaskIcon } from "../../components/Svg";
import BinanceWallet from "../../components/Svg/Icons/Wallet/BinanceWallet";
import Coinbase from "../../components/Svg/Icons/Wallet/Coinbase";

enum ConnectorNames {
  MetaMask = "metaMask",
  // Injected = "injected",
  // WalletConnect = "walletConnect",
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
        installed:
          // @ts-ignore
          typeof window !== "undefined" && Boolean(window.ethereum?.isMetaMask),
        connectorId: ConnectorNames.MetaMask,
        priority: 1,
        href: "https://metamask.app.link/dapp/biswap.org/",
      },
      {
        title: "Binance Wallet",
        icon: BinanceWallet,
        connectorId: ConnectorNames.BSC,
        priority: 2,
      },
      {
        title: "Coinbase Wallet",
        icon: Coinbase,
        connectorId: ConnectorNames.WalletLink,
        priority: 3,
      },
    ]
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
      {/*<Button onClick={onPresentAccountModal}>Open account modal</Button>*/}
    </Flex>
  );
};
