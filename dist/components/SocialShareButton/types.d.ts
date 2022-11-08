import { AnchorHTMLAttributes, ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { Scale } from "../Button/types";
import { BaseButtonProps } from "../Button";
export declare const socials: {
    readonly TWITTER: "twitter";
    readonly TELEGRAM: "telegram";
};
export declare type Social = typeof socials[keyof typeof socials];
export interface SocialShareButtonTypes extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    social: Social;
    link?: string;
    message?: string;
    scale?: Scale;
    name?: string;
    target?: string;
    width?: string;
}
export declare enum SocialsList {
    "twitter" = 0,
    "telegram" = 1
}
export declare type LinkFunctionProps = {
    message?: string;
    link?: string;
};
export interface SocialLinksProps {
    [key: string]: (props: LinkFunctionProps) => string;
}
export interface SocialStylesProps {
    theme: DefaultTheme;
    size?: string;
    color?: string;
    disabled?: boolean;
}
export interface SocialStylesReturn {
    [key: string]: {
        icon: ReactNode;
        backgroundColor: string;
    };
}
