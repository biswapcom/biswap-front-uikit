import React from "react";
import { Login, WalletConfig } from "./types";
interface Props<T> {
    walletConfig: WalletConfig<T>;
    login: Login<T>;
    onDismiss: () => void;
}
declare const WalletCard: React.FC<React.PropsWithChildren<Props<any>>>;
export default WalletCard;
