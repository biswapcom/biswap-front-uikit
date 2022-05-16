import { FC } from "react";
import { SvgProps } from "../../../../uikit/src/components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  priority: number;
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}
