import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css, DefaultTheme, keyframes } from "styled-components";

// components
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const CommonLinkStyles = ({ theme }: { theme: DefaultTheme }) => css`
  display: flex;
  align-items: center;

  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }

  .desktop-icon {
    width: 145px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const StyledLink = styled.a`
  ${CommonLinkStyles};
`;

const StyledInnerLink = styled(Link)`
  ${CommonLinkStyles};
`;

const Logo: React.FC<Props> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithTextIcon className="desktop-icon" />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <>
          <StyledLink as="a" href={href} aria-label="Biswap home page">
            {innerLogo}
          </StyledLink>
          <a href={href}>Go to home1</a>
        </>
      ) : (
        <>
          <StyledInnerLink to={href} aria-label="Biswap home page">
            {innerLogo}
          </StyledInnerLink>
          <Link to={href}>Go to home2</Link>
        </>
      )}
    </Flex>
  );
};

export default Logo;
