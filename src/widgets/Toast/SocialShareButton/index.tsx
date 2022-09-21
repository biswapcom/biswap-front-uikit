import React from "react";

// components
import { Button } from "../../../components/Button";

// types
import { SocialShareButtonTypes } from "./types";

// config
import { socialLinks, socialStyles } from "./config";

const SocialShareButton = ({
  social,
  link,
  name,
  message,
  scale = "lg",
  target = "_blank",
  width = "100%",
  ...props
}: SocialShareButtonTypes) => {
  const defaultName = social.charAt(0).toUpperCase() + social.slice(1);
  const { icon, backgroundColor } = socialStyles()[social];

  return (
    <Button
      as="a"
      href={socialLinks[social]({ link, message })}
      scale={scale}
      startIcon={icon}
      style={{ backgroundColor }}
      target={target}
      width={width}
      {...props}
    >
      {name || defaultName}
    </Button>
  );
};

export default SocialShareButton;
