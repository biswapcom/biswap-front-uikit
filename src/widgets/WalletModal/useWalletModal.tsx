import React from "react";
 import { useModal } from "../Modal";
 import ConnectModal from "./ConnectModal";
 import {Login, WalletConfig} from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
}

function useWalletModal<T>(login: Login<T>, t: (key: string) => string, wallets: WalletConfig<T>[]): ReturnType {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} wallets={wallets} />);
  return { onPresentConnectModal };
}

export default useWalletModal;


// const useWalletModal = (
//   login: Login,
//   logout: () => void,
//   account?: string,
//   recentTransaction?: any,
//   chainId?: any,
//   clearTransaction?: any,
//   isSwap?: any,
//   transactionsForUIKit?: any
// ): ReturnType => {
//   const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
//   const [onPresentAccountModal] = useModal(
//     <AccountModal
//       transactionsForUIKit={transactionsForUIKit}
//       isSwap={isSwap}
//       login={login}
//       recentTransaction={recentTransaction}
//       chainId={chainId}
//       account={account || ""}
//       logout={logout}
//       clearTransaction={clearTransaction}
//     />
//   );
//   return { onPresentConnectModal, onPresentAccountModal };
// };
//
// export default useWalletModal;
