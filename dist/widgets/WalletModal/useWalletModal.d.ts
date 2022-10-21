import { Login, WalletConfig } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
}
declare function useWalletModal<T>(login: Login<T>, wallets: WalletConfig<T>[]): ReturnType;
export default useWalletModal;
