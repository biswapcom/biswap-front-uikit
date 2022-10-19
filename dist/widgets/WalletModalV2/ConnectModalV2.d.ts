/// <reference types="react" />
import { ModalProps } from "../Modal";
import { WalletConfigV2 } from "./types";
interface WalletModalV2Props<T = unknown> extends ModalProps {
    wallets: WalletConfigV2<T>[];
    login: (connectorId: T) => Promise<any>;
}
export declare class WalletConnectorNotFoundError extends Error {
}
export declare class WalletSwitchChainError extends Error {
}
export declare function useSelectedWallet<T>(): [WalletConfigV2<T> | null, (update?: unknown) => void | Promise<void>];
export declare const walletLocalStorageKey = "wallet";
export declare function ConnectModalV2<T = unknown>(props: WalletModalV2Props<T>): JSX.Element;
export {};
