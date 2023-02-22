import React, { FC } from "react";
import styled from "styled-components";
import Flex from "../../../../components/Box/Flex";

// components
import Image from "next/image";
import { Button } from "../../../../components/Button";
import { BodyText } from "../../../../components/Typography";

// hooks
import { useMatchBreakpoints } from "../../../../contexts";

const MARKETPLACE_URL = "https://marketplace.biswap.org";
const CERTIK_URL = "https://www.certik.org/projects/biswap";

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
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark600};
  padding: 8px 16px;

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

const Audit: FC<{ marketplaceLink?: string; baseAwsUrl: string }> = ({
  marketplaceLink,
  baseAwsUrl,
}) => {
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
            <Image
              width={19}
              height={19}
              src={`${baseAwsUrl}/icons/Market.svg`}
              alt=""
            />
          </IconWrapper>
          <BodyText scale="size14" color="white" bold>
            Marketplace
          </BodyText>
        </Flex>
      </MarketPlaceButton>
      <LinkWrap href={CERTIK_URL} target="_blank">
        <Image
          width={124}
          height={35}
          src={`${baseAwsUrl}/icons/CertikAudited.svg`}
          alt="Certik"
        />
      </LinkWrap>
    </AuditedWrap>
  );
};

export default Audit;
