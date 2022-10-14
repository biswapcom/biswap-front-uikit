/// <reference types="react" />
import { Login } from "./types";
import { WalletConfig } from "./types";
interface Props<T> {
    login: Login<T>;
    onDismiss?: () => void;
    wallets: WalletConfig<T>[];
}
declare function ConnectModal<T>({ login, onDismiss, wallets: connectors, }: Props<T>): JSX.Element;
export default ConnectModal;
