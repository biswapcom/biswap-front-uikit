import React from "react";
import { useModal } from "../Modal";
import { ConnectModalV2, WalletConfigV2 } from "./ConnectModalV2";

// login: (connectorId: T) => Promise<any>
//
// interface ReturnType {
//     onPresentConnectModal: () => void;
// }

function useWalletModal<T>(
  login: (connectorId: T) => Promise<any>,
  wallets: WalletConfigV2<T>[]
) {
  const [onPresentConnectModalV2] = useModal(
    <ConnectModalV2 login={login} wallets={wallets} />
  );
  return { onPresentConnectModalV2 };
}

export default useWalletModal;
