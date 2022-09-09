import React, { FC } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../../../../hooks";
import { Flex } from "../../../../../components/Box";
import { Link } from "react-router-dom";

interface Props {
  href?: string;
  eventButtonLogo?: () => JSX.Element;
}

const Wrapper = styled(Flex)<{ flat: boolean }>`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: ${({ flat }) => (flat ? 0 : "8px")};
  background: linear-gradient(258.91deg, #ffdb1c 52.52%, #ff5c00 95.56%);
  cursor: pointer;
  transition: opacity 0.3s ease;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 10px;
    &:before {
      display: block;
      content: "";
      position: absolute;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      border-radius: 8px;
      top: calc(50%);
      left: calc(50%);
      z-index: 1;
      animation: pulse-whiteCustom 2s infinite;
    }
    @keyframes pulse-whiteCustom {
      0% {
        transform: scale(1) translateY(-50%) translateX(-50%);
        box-shadow: 0 0 0 0 #ffa310;
      }
      70% {
        transform: scale(calc(1)) translateY(-50%) translateX(-50%);
        box-shadow: 0 0 0 4px rgba(51, 217, 178, 0);
      }
      100% {
        transform: scale(1) translateY(-50%) translateX(-50%);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
      }
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  padding-right: 16px;
  overflow: hidden;
  z-index: 30;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark800};
  ${({ theme }) => theme.mediaQueries.sm} {
    z-index: 10;
    width: auto;
    border-radius: 8px 0 0 8px;
  }
`;

const StyledRouterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  padding-right: 16px;
  overflow: hidden;
  z-index: 30;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark800};
  ${({ theme }) => theme.mediaQueries.sm} {
    z-index: 30;
    width: auto;
    border-radius: 8px 0 0 8px;
  }
`;

const BlockChainWeekEvent: FC<Props> = ({ href = "/", eventButtonLogo }) => {
  const { isMobile } = useMatchBreakpoints();
  const buttonText = "Grand Event";
  const isAbsoluteUrl = href.startsWith("http");
  const pathWithEventParam = isAbsoluteUrl
    ? `${href}/blockchain_week`
    : "/blockchain_week";

  return (
    <Wrapper pl={eventButtonLogo ? "0" : "16px"} flat={isMobile}>
      {isAbsoluteUrl ? (
        <StyledLink href={pathWithEventParam}>
          {eventButtonLogo && eventButtonLogo()}
          {buttonText}
        </StyledLink>
      ) : (
        <StyledRouterLink to={pathWithEventParam}>
          {eventButtonLogo && eventButtonLogo()}
          {buttonText}
        </StyledRouterLink>
      )}
    </Wrapper>
  );
};

export default BlockChainWeekEvent;
