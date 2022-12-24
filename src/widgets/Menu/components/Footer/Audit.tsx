import React, { FC } from "react";
import styled from "styled-components";
import { CerticAuditedIcon, MarketIcon } from "../../../../components/Svg";
import { Button } from "../../../../components/Button";
import Flex from "../../../../components/Box/Flex";
import { BodyText } from "../../../../components/Typography";

const AuditedWrap = styled(Flex)`
  grid-area: audit;
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 24px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: -30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 0;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 16px;
    margin-left: 0;
  }
`;

const LinkWrap = styled.a`
  height: fit-content;
`;

const MarketPlaceButton = styled(Button)`
  padding: 8px;
  width: 156px;
  background: ${({ theme }) => theme.colors.dark600};
  border-radius: 8px;
  margin-bottom: 8px;
`;
const IconWrapper = styled.div`
  background: linear-gradient(136.03deg, #1263f1 -7.36%, #f63d5e 131.43%);
  border-radius: 6px;
  padding: 8px;
  margin-right: 8px;
`;

const Audit: FC = () => (
  <AuditedWrap>
    <MarketPlaceButton
      as="a"
      href="https://marketplace.biswap.org"
      target="_blank"
    >
      <Flex alignItems="center">
        <IconWrapper>
          <MarketIcon width="19px" />
        </IconWrapper>
        <BodyText scale="size14" color="white" bold>
          Marketplace
        </BodyText>
      </Flex>
    </MarketPlaceButton>
    <LinkWrap href="https://www.certik.org/projects/biswap" target="_blank">
      <CerticAuditedIcon
        style={{
          padding: "8px 16px",
          backgroundColor: "#102648",
          borderRadius: "8px",
          width: "156px",
        }}
      />
    </LinkWrap>
  </AuditedWrap>
);

export default Audit;
