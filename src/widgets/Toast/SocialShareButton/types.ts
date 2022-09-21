import { BaseButtonProps } from "../../../components/Button";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { Scale } from "../../../components/Button/types";

export interface SocialShareButtonTypes
  extends BaseButtonProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  social: "telegram" | "twitter";
  link?: string;
  message?: string;
  scale?: Scale;
  name?: string;
  target?: string;
  width?: string;
}

export enum SocialsList {
  "twitter",
  "telegram",
}

export type LinkFunctionProps = { message?: string; link?: string };

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
