import React, { FC } from "react";
import { FlexboxProps } from "styled-system";

import { socialLinks } from "./config";
import { Flex } from "../Box";
import { IconComponent } from "../IconComponent";

interface SocialShareButtonCircleProps extends FlexboxProps {
  social: string;
  label: string;
  link: string;
  message: string;
}

const SocialShareButtonCircle: FC<SocialShareButtonCircleProps> = ({
  social,
  label,
  link,
  message,
  ...props
}) => {
  return (
    <Flex
      as="a"
      href={socialLinks[social]({ link, message })}
      target="_blank"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <IconComponent iconName={label} width="22px" color="white" />
    </Flex>
  );
};

export default SocialShareButtonCircle;
