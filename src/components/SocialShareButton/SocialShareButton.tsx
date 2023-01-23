import React from "react";
import styled, { useTheme } from "styled-components";

// components
import { BaseButtonProps, Button } from "../Button";
import { Box, BoxProps, Flex } from "../Box";

// types
import { socials, SocialShareButtonTypes } from "./types";

// config
import { socialLinks, socialStyles } from "./config";
import { Image } from "../Image";

// @ts-ignore
import gift from "./shared/gift.png";

const Wrapper = styled(Box)<{ disabled?: boolean; width: string }>`
  position: relative;
  width: ${({ width }) => width ?? "auto"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity .3s ease-in-out;

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 0.84)};
  },
`;

const GiftWrap = styled(Flex)<{ withGift?: boolean }>`
  display: ${({ withGift }) => (withGift ? "block" : "none")};
  position: absolute;
  width: 37px;
  height: 32px;
  bottom: 0;
  right: 0;
`;

const SocialShareButton = ({
  social = socials.TELEGRAM,
  link,
  name,
  message,
  scale = "lg",
  target = "_blank",
  width = "auto",
  withGift,
  disabled,
  ...props
}: SocialShareButtonTypes) => {
  const theme = useTheme();
  const defaultName = social.charAt(0).toUpperCase() + social.slice(1);
  const { icon, backgroundColor } = socialStyles({ theme, disabled })[social];

  return (
    <Wrapper disabled={disabled} width={width} {...props}>
      <Button
        as="a"
        href={socialLinks[social]({ link, message })}
        scale={scale}
        startIcon={icon}
        style={{ backgroundColor, pointerEvents: disabled ? "none" : "auto" }}
        target={target}
        width="100%"
        external
        pr={withGift ? "20px" : "16px"}
        {...props}
      >
        {name || defaultName}
      </Button>
      <GiftWrap withGift={withGift}>
        <Image width={37} height={32} src={gift} />
      </GiftWrap>
    </Wrapper>
  );
};

export default SocialShareButton;
