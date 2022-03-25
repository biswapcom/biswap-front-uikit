import throttle from "lodash/throttle";
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Box} from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "./components/Footer/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import {useMatchBreakpoints} from "../../hooks";
import Logo from "./components/Logo";
import {
  MENU_HEIGHT,
  MOBILE_MENU_HEIGHT,
  TOP_BANNER_HEIGHT,
  TOP_BANNER_HEIGHT_MOBILE,
} from "./config";
import {NavProps} from "./types";
import {MenuContext} from "./context";
import IconComponent from "../../components/Svg/IconComponent";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({theme}) => theme.nav.background};
    // border-bottom: 1px solid ${({theme}) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;

  ${({theme}) => theme.mediaQueries.sm} {
    background-color: transparent;
  }
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  linkComponent = "a",
  userMenu,
  banner,
                                    // globalMenu,
  isDark,
                                    toggleTheme,
                                    currentLang,
                                    setLang,
                                    cakePriceUsd,
                                    links,
                                    subLinks,
                                    activeItem,
                                    activeSubItem,
                                    buyCakeLabel,
                                    children,
                                    BSWPriceLabel,
                                    BSWPriceValue,
                                    footerStatistic,
                                    onClick,
                                    buyBswLink,
                                    aboutLinks,
                                    productLinks,
                                    serviceLinks,
                                  }) => {
  const {isMobile} = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(
    typeof window === "undefined" ? 0 : window.pageYOffset
  );

  const topBannerHeight = isMobile
    ? TOP_BANNER_HEIGHT_MOBILE
    : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = banner
    ? MENU_HEIGHT + topBannerHeight
    : MENU_HEIGHT;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage =
        window.document.body.clientHeight ===
        currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (
          currentOffset < refPrevOffset.current ||
          currentOffset <= totalTopMenuHeight
        ) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
          <StyledNav>
            <Flex>
              <Logo isDark={isDark} href={homeLink?.href ?? "/"}/>
              <MenuItems
                items={links}
                activeItem={activeItem}
                activeSubItem={activeSubItem}
                ml="24px"
              />
            </Flex>
            <Flex alignItems="center" height="100%">
              <IconComponent
                width={isMobile ? 67 : 94}
                mr={24}
                iconName="CerticAudited"
              />
              {userMenu}
            </Flex>
          </StyledNav>
        </FixedContainer>
        <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight + 1}px` : "0"}>
          <Inner isPushed={false} showMenu={showMenu}>
            {children}
            <Footer
              BSWPriceLabel={BSWPriceLabel}
              BSWPriceValue={BSWPriceValue}
              footerStatistic={footerStatistic}
              onClick={onClick}
              buyBswLink={buyBswLink}
              aboutLinks={aboutLinks}
              productLinks={productLinks}
              serviceLinks={serviceLinks}
            />
          </Inner>
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
