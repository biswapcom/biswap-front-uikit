import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";

export type WalletConfigV2<T = unknown> = {
  id: string;
  title: string;
  icon: string | FC<React.PropsWithChildren<SvgProps>>;
  connectorId: T;
  deepLink?: string;
  installed?: boolean;
  guide?: LinkOfDevice;
  downloadLink?: LinkOfDevice;
  mobileOnly?: boolean;
  qrCode?: () => Promise<string>;
};
export type LinkOfTextAndLink = string | { text: string; url: string };

export type DeviceLink = {
  desktop?: LinkOfTextAndLink;
  mobile?: LinkOfTextAndLink;
};

export type LinkOfDevice = string | DeviceLink;
