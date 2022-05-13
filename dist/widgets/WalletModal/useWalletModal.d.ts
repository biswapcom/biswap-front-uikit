import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void) => ReturnType;
export default useWalletModal;
