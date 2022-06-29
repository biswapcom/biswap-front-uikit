import React from "react";
import styled from "styled-components";
import { TelegramShareButton, TwitterShareButton } from "react-share";
import { Button } from "../../components/Button";
import { TelegramIcon, TwitterIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
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
      <TwitterShareButton
        style={{ width: "40%", height: "32px" }}
        title={tweeterDescription}
        url={`${url}`}
      >
        <Button
          mr="8px"
          scale="sm"
          width="100%"
          height="100%"
          style={{ backgroundColor: "#16CDFD", alignItems: "center" }}
        >
          <StyledIcon src={giftImg} alt="gift-icon" />
          <Text mr="6px" my="8px" color="#fff" fontSize="12px">
            Twitter
          </Text>
          <TwitterIcon mr="8px" color="#fff" width="20px" />
        </Button>
      </TwitterShareButton>
      <TelegramShareButton
        style={{ width: "40%", height: "32px", marginLeft: "6px" }}
        title={telegramDescription}
        url={`${url}`}
      >
        <Button
          mx="8px"
          scale="sm"
          width="100%"
          height="100%"
          style={{ backgroundColor: "#26A6E5", alignItems: "center" }}
        >
          <Text color="#fff" fontSize="12px">
            Telegram
          </Text>
          <TelegramIcon ml="8px" color="#fff" width="20px" />
        </Button>
      </TelegramShareButton>
    </ActionsContainer>
  );
};

export default ToastAction;
