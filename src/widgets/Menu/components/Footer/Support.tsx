import React from "react";
import styled from "styled-components";
import { TelegramIcon } from "../../../../components/Svg";

const Wrapper = styled.div`
  grid-area: support;
  margin-top: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  background: #26a6e5;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }
`;

const Suport: React.FC = () => {
  return (
    <Wrapper>
      <Title>Support 24/7</Title>
      <LinkBtn href="https://t.me/biswap" target="_blank">
        Contact us
        <TelegramIcon width="24px" color="contrast" ml="4px" />
      </LinkBtn>
    </Wrapper>
  );
};

export default Suport;
