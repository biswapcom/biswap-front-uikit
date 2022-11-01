import React from "react";
import styled, { useTheme } from "styled-components";

// components
import {BaseButtonProps, Button} from "../Button";

// types
import {socials, SocialShareButtonTypes} from "./types";

// config
import { socialLinks, socialStyles } from "./config";

const Wrapper = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity .3s ease-in-out;

  opacity: ${({ disabled }) => (disabled ? .64 : 1)};
  
  &:hover:not(:disabled) {
    opacity: .64;
  },
`;

const SocialShareButton = ({
  social = socials.TELEGRAM,
  link,
  name,
  message,
  scale = "lg",
  target = "_blank",
  width = "100%",
  disabled,
  ...props
}: SocialShareButtonTypes) => {
  const theme = useTheme();
  const defaultName = social.charAt(0).toUpperCase() + social.slice(1);
  const { icon, backgroundColor } = socialStyles({ theme, disabled })[social];

  return (
    <Wrapper disabled={disabled}>
      <Button
        as="a"
        href={socialLinks[social]({ link, message })}
        scale={scale}
        startIcon={icon}
        style={{ backgroundColor, pointerEvents: disabled ? "none" : "auto" }}
        target={target}
        width={width}
        {...props}
      >
        {name || defaultName}
      </Button>
    </Wrapper>
  );
};

export default SocialShareButton;
