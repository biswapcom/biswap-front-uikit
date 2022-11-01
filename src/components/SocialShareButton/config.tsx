import React, { ReactNode } from "react";

// components
import { TelegramIcon, TwitterIcon } from "../Svg";

// types
import {
  LinkFunctionProps,
  SocialLinksProps,
  SocialStylesProps,
  SocialStylesReturn,
} from "./types";

export const socialLinks: SocialLinksProps = {
  twitter: ({ message = "", link = "" }: LinkFunctionProps): string =>
    `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
      message
    )}&url=${encodeURIComponent(link)}`,
  telegram: ({
    message = "",
    link = "",
  }: {
    message?: string;
    link?: string;
  }): string =>
    `https://telegram.me/share/url?text=${encodeURIComponent(
      message
    )}&url=${encodeURIComponent(link)}`,
};

export const socialStyles = ({
  size = "20px",
  color = "white",
}: SocialStylesProps = {}): SocialStylesReturn => ({
  twitter: {
    icon: <TwitterIcon width={size} color={color} />,
    backgroundColor: "#16CDFD",
  },
  telegram: {
    icon: <TelegramIcon width={size} color={color} />,
    backgroundColor: "#26A6E5",
  },
});
