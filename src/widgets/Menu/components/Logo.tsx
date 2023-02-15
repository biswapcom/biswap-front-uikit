import React, { FC, useContext } from "react";
import styled from "styled-components";

// components
import Flex from "../../../components/Box/Flex";
import { Button } from "../../../components/Button/";
import { BodyText } from "../../../components/Typography";
import { Box } from "../../../components/Box";
import Image from "next/image";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

// context
import { MenuContext } from "../context";

// types
interface IProps {
  href: string;
  baseAwsUrl: string;
  logoSubtitle?: string;
}

// styled
const StyledInnerButton = styled(Button)`
  display: flex;
  align-items: center;
  height: auto;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const LogoSwitcher: FC<{ logoSubtitle?: string; baseAwsUrl: string }> = ({
  logoSubtitle,
  baseAwsUrl,
}) => {
  const { isMobile, isMd } = useMatchBreakpoints();

  const bswSrc = `${baseAwsUrl}/coins/bsw.svg`;

  if (isMobile || isMd) {
    return <Image src={bswSrc} width={32} height={32} alt="bsw" />;
  } else if (logoSubtitle) {
    return (
      <Flex>
        <Image src={bswSrc} width={32} height={32} alt="bsw" />
        <Box ml="8px">
          <Image
            src={`${baseAwsUrl}/icons/ProjectName.svg`}
            width={104}
            height={32}
            alt="Biswap"
          />
          <BodyText mt="-6px" textAlign="left" scale="size12">
            {logoSubtitle}
          </BodyText>
        </Box>
      </Flex>
    );
  }

  return (
    <Image
      src={`${baseAwsUrl}/icons/LogoWithText.svg`}
      width={144}
      height={32}
      alt="Biswap"
    />
  );
};

const Logo: React.FC<IProps> = ({ href, logoSubtitle, baseAwsUrl }) => {
  const { linkComponent } = useContext(MenuContext);

  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledInnerButton
          variant="light"
          onClick={() => window.open(href, "_self")}
          aria-label="Biswap home page"
        >
          <LogoSwitcher logoSubtitle={logoSubtitle} baseAwsUrl={baseAwsUrl} />
        </StyledInnerButton>
      ) : (
        <StyledInnerButton
          variant="light"
          as={linkComponent}
          href={href}
          // onClick={() => push(href)}
          aria-label="Biswap home page"
        >
          <LogoSwitcher logoSubtitle={logoSubtitle} baseAwsUrl={baseAwsUrl} />
        </StyledInnerButton>
      )}
    </Flex>
  );
};

export default Logo;
