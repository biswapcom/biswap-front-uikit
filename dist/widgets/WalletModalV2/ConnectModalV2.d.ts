/// <reference types="react" />
import { WalletConfigV2, WalletModalV2Props } from "./types";
export declare function useSelectedWallet<T>(): [WalletConfigV2<T> | null, (update?: unknown) => void | Promise<void>];
export declare function ConnectModalV2<T = unknown>(props: WalletModalV2Props<T>): JSX.Element;
