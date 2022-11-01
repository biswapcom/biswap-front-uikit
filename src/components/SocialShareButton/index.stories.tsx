import React, { useState } from "react";
import styled from "styled-components";
import SocialShareButton from "./SocialShareButton";
import Flex from "../Box/Flex";

export default {
  title: "Components/SocialShareButton",
  component: SocialShareButton,
  argTypes: {},
};

const Row = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 64px 32px;
  width: 560px;
`;

export const Default: React.FC = () => {
  return (
    <>
      <Row>
        <SocialShareButton
          social="twitter"
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
          mr="10px"
        />
        <SocialShareButton
          social="telegram"
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        />
      </Row>
      <Row>
        <SocialShareButton
          social="telegram"
          width="100%"
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        />
      </Row>
    </>
  );
};

export const Disabled: React.FC = () => {
  return (
    <Row>
      <SocialShareButton
        disabled
        social="twitter"
        link={`https://github.com`}
        message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        mr="10px"
      />
      <SocialShareButton
        disabled
        social="telegram"
        link={`https://github.com`}
        message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
      />
    </Row>
  );
};
