import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc",
    WalletLink = "walletlink"
}
export declare type Login = (connectorId: ConnectorNames) => void;
export interface Config {
    priority: number;
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
}
