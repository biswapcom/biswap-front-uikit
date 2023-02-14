import React, { FC, useContext } from "react";
import styled from "styled-components";

// components
import Flex from "../../../components/Box/Flex";
import { Button } from "../../../components/Button/";
import { BodyText } from "../../../components/Typography";
import { Box } from "../../../components/Box";
import { Image } from "../../../components/Image";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

// context
import { MenuContext } from "../context";

// types
interface Props {
  href: string;
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

const BswIcon = styled(Image).attrs({
  src: "https://static.biswap.org/bs/coins/bsw.svg",
})`
  width: 32px;
`;

const ProjectNameIcon = styled(Image).attrs({
  src: "https://static.biswap.org/bs/icons/ProjectName.svg",
})`
  width: 104px;
`;

const LogoWithTextIcon = styled(Image).attrs({
  src: "https://static.biswap.org/bs/icons/LogoWithText.svg",
})`
  width: 145px;
`;

const LogoSwitcher: FC<{ logoSubtitle?: string }> = ({ logoSubtitle }) => {
  const { isMobile, isMd } = useMatchBreakpoints();

  if (isMobile || isMd) {
    return (
      <Image
        src="https://static.biswap.org/bs/coins/bsw.svg"
        width={32}
        height={32}
      />
    );
  } else if (logoSubtitle) {
    return (
      <Flex>
        <Image
          src="https://static.biswap.org/bs/coins/bsw.svg"
          width={32}
          height={32}
        />
        <Box ml="8px">
          <Image
            src="https://static.biswap.org/bs/icons/ProjectName.svg"
            width={104}
            height={32}
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
      src="https://static.biswap.org/bs/icons/LogoWithText.svg"
      width={144}
      height={32}
    />
  );
};

const Logo: React.FC<Props> = ({ href, logoSubtitle }) => {
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
          <LogoSwitcher logoSubtitle={logoSubtitle} />
        </StyledInnerButton>
      ) : (
        <StyledInnerButton
          variant="light"
          as={linkComponent}
          href={href}
          // onClick={() => push(href)}
          aria-label="Biswap home page"
        >
          <LogoSwitcher logoSubtitle={logoSubtitle} />
        </StyledInnerButton>
      )}
    </Flex>
  );
};

export default Logo;
