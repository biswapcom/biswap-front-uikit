import React from "react";
import styled from "styled-components";
// import { TelegramShareButton, TwitterShareButton } from "react-share";

// components
import { Button } from "../../components/Button";
import { TelegramIcon, TwitterIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
import { SocialShareButton } from "../../components/SocialShareButton";

interface ToastActionProps {
  title?: string;
  url?: string;
  telegramDescription: string;
  tweeterDescription: string;
  thx?: string;
  withGift?: boolean;
}

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const StyledIcon = styled.img`
  margin-left: 8px;
  width: 26px;
  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));
`;

const ToastAction: React.FC<ToastActionProps> = ({
  title,
  telegramDescription,
  tweeterDescription,
  url,
  thx,
  withGift,
}) => {
  return (
    <ActionsContainer>
      {/*<Button*/}
      {/*  mr="8px"*/}
      {/*  scale="md"*/}
      {/*  width="100%"*/}
      {/*  style={{ backgroundColor: "#16CDFD" }}*/}
      {/*>*/}
      {/*  <StyledIcon src={giftImg} alt="gift-icon" />*/}
      {/*  <Text mr="6px" my="8px" color="#fff" fontSize="12px">*/}
      {/*    Twitter*/}
      {/*  </Text>*/}
      {/*  <TwitterIcon mr="8px" color="#fff" width="20px" />*/}
      {/*</Button>*/}

      {/*<Button*/}
      {/*  mx="8px"*/}
      {/*  scale="md"*/}
      {/*  width="100%"*/}
      {/*  style={{ backgroundColor: "#26A6E5" }}*/}
      {/*>*/}
      {/*  <Text color="#fff" fontSize="12px">*/}
      {/*    Telegram*/}
      {/*  </Text>*/}
      {/*  <TelegramIcon ml="8px" color="#fff" width="20px" />*/}
      {/*</Button>*/}
      <SocialShareButton
        social="twitter"
        message={tweeterDescription}
        link={url}
        mr="8px"
        height="32px"
        withGift={withGift}
      />
      {/*<SocialShareButton*/}
      {/*  social="telegram"*/}
      {/*  message={telegramDescription}*/}
      {/*  link={url}*/}
      {/*  height="32px"*/}
      {/*/>*/}
    </ActionsContainer>
  );
};

export default ToastAction;
