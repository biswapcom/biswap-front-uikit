import React from "react";
import styled, { useTheme } from "styled-components";

// components
import { BaseButtonProps, Button } from "../Button";
import { Box, BoxProps } from "../Box";

// types
import { socials, SocialShareButtonTypes } from "./types";

// config
import { socialLinks, socialStyles } from "./config";

const Wrapper = styled(Box)<{ disabled?: boolean; width: string }>`
  width: ${({ width }) => width ?? "auto"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity .3s ease-in-out;

  opacity: ${({ disabled }) => (disabled ? 0.84 : 1)};
  
  &:hover:not(:disabled) {
    opacity: .84;
  },
`;

const SocialShareButton = ({
  social = socials.TELEGRAM,
  link,
  name,
  message,
  scale = "lg",
  target = "_blank",
  width = "auto",
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
        endIcon={icon}
        style={{ backgroundColor, pointerEvents: disabled ? "none" : "auto" }}
        target={target}
        width="100%"
        external
        {...props}
      >
        {name || defaultName}
      </Button>
    </Wrapper>
  );
};

export default SocialShareButton;
