import React from "react";
import styled from "styled-components";
// import { TelegramShareButton, TwitterShareButton } from "react-share";

// components
import { Button } from "../../components/Button";
import { TelegramIcon, TwitterIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
import SocialShareButton from "./SocialShareButton";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import giftImg from "./shared/gift.png";

interface ToastActionProps {
  title?: string;
  url?: string;
  telegramDescription: string;
  tweeterDescription: string;
  thx?: string;
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
      />
      <SocialShareButton
        social="telegram"
        message={telegramDescription}
        link={url}
      />
    </ActionsContainer>
  );
};
{
  /*<TwitterShareButton*/
}
{
  /*  style={{ width: "40%", height: "32px" }}*/
}
{
  /*  title={tweeterDescription}*/
}
{
  /*  url={`${url}`}*/
}
{
  /*>*/
}
{
  /*</TwitterShareButton>*/
}
{
  /*<TelegramShareButton*/
}
{
  /*  style={{ width: "40%", height: "32px", marginLeft: "6px" }}*/
}
{
  /*  title={telegramDescription}*/
}
{
  /*  url={`${url}`}*/
}
{
  /*>*/
}
{
  /*</TelegramShareButton>*/
}
export default ToastAction;
