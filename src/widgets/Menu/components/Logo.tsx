import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled, { css, DefaultTheme, keyframes } from "styled-components";

// components
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";
import { Button } from "../../../components/Button/";
import {Link} from "../../../components/Link";

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

const StyledInnerButton = styled(Button)`
  ${CommonLinkStyles};
  height: auto;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const Logo: React.FC<Props> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const { push } = useHistory()

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
          <StyledInnerButton
            variant="light"
            onClick={() => window.open(href, "_self")}
            aria-label="Biswap home page"
          >
            {innerLogo}
          </StyledInnerButton>
          <Link href={href}>uikit link</Link>
          <a href={href}>base link</a>
        </>

      ) : (
        <StyledInnerButton
          variant="light"
          onClick={() => push(href)}
          aria-label="Biswap home page"
        >
          {innerLogo}
        </StyledInnerButton>
      )}
    </Flex>
  );
};

export default Logo;
