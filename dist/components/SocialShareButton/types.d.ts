import { BaseButtonProps } from "../Button";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { Scale } from "../Button/types";
export interface SocialShareButtonTypes extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    social: "telegram" | "twitter";
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
    size?: string;
    color?: string;
}
export interface SocialStylesReturn {
    [key: string]: {
        icon: ReactNode;
        backgroundColor: string;
    };
}
