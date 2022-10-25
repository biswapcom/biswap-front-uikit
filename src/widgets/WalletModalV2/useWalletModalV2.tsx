import React from "react";
import { useModal } from "../Modal";
import { ConnectModalV2 } from "./ConnectModalV2";
import { WalletConfigV2 } from "./types";

// interface ReturnType {
//     onPresentConnectModal: () => void;
// }

const Handler = () => null;


function useWalletModal<T>(
  login: (connectorId: T) => Promise<any>,
  wallets: WalletConfigV2<T>[]
) {
  const [onPresentConnectModalV2] = useModal(
    <ConnectModalV2 login={login} wallets={wallets} onDismiss={Handler}/>
  );
  return { onPresentConnectModalV2 };
}

export default useWalletModal;
