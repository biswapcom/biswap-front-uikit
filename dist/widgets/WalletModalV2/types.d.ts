import React, { FC } from "react";
import { SvgProps } from "../../components/Svg";
export declare type WalletConfigV2<T = unknown> = {
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
export declare type LinkOfTextAndLink = string | {
    text: string;
    url: string;
};
export declare type DeviceLink = {
    desktop?: LinkOfTextAndLink;
    mobile?: LinkOfTextAndLink;
};
export declare type LinkOfDevice = string | DeviceLink;
