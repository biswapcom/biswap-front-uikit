import { WalletConfigV2 } from "./ConnectModalV2";
declare function useWalletModal<T>(login: (connectorId: T) => Promise<any>, wallets: WalletConfigV2<T>[]): {
    onPresentConnectModalV2: import("../Modal/types").Handler;
};
export default useWalletModal;
