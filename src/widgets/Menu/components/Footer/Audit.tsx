import React, { FC } from "react";
import styled from "styled-components";
import Flex from "../../../../components/Box/Flex";

import { Button } from "../../../../components/Button";
import { BodyText } from "../../../../components/Typography";
import { useMatchBreakpoints } from "../../../../contexts";

const MARKETPLACE_URL = "https://marketplace.biswap.org";
const CERTIC_URL = "https://www.certik.org/projects/biswap";

const AuditedWrap = styled(Flex)`
  grid-area: audit;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: -44px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 16px;
    margin-left: 0;
  }
`;

const LinkWrap = styled.a`
  height: fit-content;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const MarketPlaceButton = styled(Button)`
  padding: 8px;
  width: 156px;
  background: ${({ theme }) => theme.colors.dark600};
  border-radius: 8px;
  margin-bottom: 0;
  transition: opacity 0.3s ease;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 8px;
  }
  &:hover {
    opacity: 0.7;
  }
`;
const IconWrapper = styled.div`
  background: linear-gradient(136.03deg, #1263f1 -7.36%, #f63d5e 131.43%);
  border-radius: 6px;
  padding: 8px;
  margin-right: 8px;
`;

const MarketIcon = styled.img.attrs({
  src: "https://static.biswap.org/bs/icons/Market.svg",
})`
  width: 19px;
`;

const CertikAuditedIcon = styled.img.attrs({
  src: "https://static.biswap.org/bs/icons/CerticAudited.svg",
})`
  width: 156px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark600};
  padding: 8px 16px;
`;

const Audit: FC<{ marketplaceLink?: string }> = ({ marketplaceLink }) => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <AuditedWrap>
      <MarketPlaceButton
        as="a"
        href={marketplaceLink ?? MARKETPLACE_URL}
        target={isMobile ? "_self" : "_blank"}
      >
        <Flex alignItems="center">
          <IconWrapper>
            <MarketIcon />
          </IconWrapper>
          <BodyText scale="size14" color="white" bold>
            Marketplace
          </BodyText>
        </Flex>
      </MarketPlaceButton>
      <LinkWrap href={CERTIC_URL} target="_blank">
        <CertikAuditedIcon />
      </LinkWrap>
    </AuditedWrap>
  );
};

export default Audit;
