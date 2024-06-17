import React, {
  useEffect,
  useRef,
  useState,
  FC,
  PropsWithChildren,
  Fragment,
} from "react";
import throttle from "lodash/throttle";
import styled, { DefaultTheme } from "styled-components";

// components
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "./components/Footer/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import Logo from "./components/Logo";
// import BDayEvent from "./components/UserEvents/BDayEvent";
// import { WarningSolidIcon } from "../../components/Svg";

// context
import { MenuContext } from "./context";

// hooks
import { useMatchBreakpoints } from "../../contexts";

// config
import {
  MENU_HEIGHT,
  MOBILE_EVENT_BUTTON_HEIGHT,
  TOP_BANNER_HEIGHT,
  TOP_BANNER_HEIGHT_MOBILE,
  // FISHING_BANNER_HEIGHT,
  // FISHING_MOBILE_BANNER_HEIGHT,
  TRANSFER_BLOCK_OPENED_HEIGHT,
  TRANSFER_BLOCK_CLOSED_HEIGHT,
} from "./config";

// types
import { NavProps } from "./types";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const getBackground = ({
  theme,
  menuBg,
  isMobileMenuOpened,
}: {
  theme: DefaultTheme;
  menuBg: boolean;
  isMobileMenuOpened: boolean;
}) => {
  if (isMobileMenuOpened) return theme.colors.white;
  if (menuBg && !isMobileMenuOpened) return theme.nav.background;
  return "transparent";
};

// const FishingWarn = styled.div<{ showFishingWarn: boolean }>`
//   display: flex;
//   align-items: center;
//   background: ${({ theme }) => theme.colors.warning};
//   height: ${({ showFishingWarn }) =>
//     !showFishingWarn ? "0px" : `${FISHING_MOBILE_BANNER_HEIGHT}px`};
//   padding: 10px 20px 10px 70px;
//   transition: height 0.3s ease;
//   position: relative;
//   overflow: hidden;
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     padding: 10px 40px 10px 100px;
//     height: ${({ showFishingWarn }) =>
//       !showFishingWarn ? "0px" : `${FISHING_BANNER_HEIGHT}px`};
//   }
// `;
// const Label = styled.span`
//   font-size: 14px;
//   color: ${({ theme }) => theme.colors.background};
//   flex-grow: 1;
//   font-weight: 600;
// `;
// const StyledImgWarnIcon = styled(WarningSolidIcon)`
//   width: 44px;
//   height: auto;
//   position: absolute;
//   top: 50%;
//   left: 14px;
//   transform: translateY(-50%);
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     left: 28px;
//     width: 64px;
//   }
// `;

const StyledNav = styled.nav<{ menuBg: boolean; isMobileMenuOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${getBackground};
  transform: translate3d(0, 0, 0);
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    background-color: ${({ theme, menuBg }) =>
      menuBg ? theme.nav.background : "transparent"};
  } ;
`;

const FixedContainer = styled.div.attrs({
  id: "menu-container",
})<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  //transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;

  transition: top 0.3s ease-in-out, max-height 0.3s ease-in-out;
`;

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

const BodyWrapper = styled(Flex)`
  position: relative;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: FC<PropsWithChildren<NavProps>> = ({
  linkComponent = "a",
  banner,
  links,
  rightSide,
  subLinks,
  activeItem,
  activeSubItem,
  children,
  BSWPriceLabel,
  BSWPriceValue,
  footerStatistic,
  registerToken,
  buyBswHandler,
  aboutLinks,
  productLinks,
  serviceLinks,
  socialLinks,
  withEvent,
  eventCallback,
  //eventButtonLogo,
  customLogoSubtitle,
  marketplaceLink,
  baseAwsUrl = "https://static.biswap.org/bs",
  buyBswLabel = "Buy BSW",
  mobileLangSelector,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [menuBg, setMenuBg] = useState<boolean>(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);

  const [transferBannerHeight, setTransferBannerHeight] = useState<number>(
    TRANSFER_BLOCK_CLOSED_HEIGHT
  );

  // const [showFishingWarn, setShowFishingWarn] = useState(true);

  const refPrevOffset = useRef(
    typeof window === "undefined" ? 0 : window.pageYOffset
  );

  // const fishingBannerHeight = isMobile
  //   ? FISHING_MOBILE_BANNER_HEIGHT
  //   : FISHING_BANNER_HEIGHT

  const topBannerHeight = isMobile
    ? TOP_BANNER_HEIGHT_MOBILE
    : TOP_BANNER_HEIGHT;

  const TopMenuWithBannerHeight = banner
    ? MENU_HEIGHT + transferBannerHeight
    : MENU_HEIGHT;

  // const TopMenuWithAllBannersHeight = showFishingWarn
  //   ? TopMenuWithBannerHeight + fishingBannerHeight
  //   : TopMenuWithBannerHeight;

  const totalTopMenuHeight =
    withEvent && isMobile
      ? TopMenuWithBannerHeight + MOBILE_EVENT_BUTTON_HEIGHT
      : TopMenuWithBannerHeight;

  const RightSide = rightSide ?? Fragment;

  // const closeWarn = () => {
  //   localStorage.setItem("showFishingWarn", JSON.stringify(false));
  //   setShowFishingWarn(false);
  // };
  //

  // useEffect(() => {
  //   if (!localStorage.getItem("showFishingWarn")) {
  //     localStorage.setItem("showFishingWarn", JSON.stringify(true));
  //   }
  //   if (localStorage.getItem("showFishingWarn") === JSON.stringify(true)) {
  //     setShowFishingWarn(true);
  //   }
  // }, [showFishingWarn]);

  const setTransferHeight = (expanded: boolean) =>
    setTransferBannerHeight(
      expanded ? TRANSFER_BLOCK_CLOSED_HEIGHT : TRANSFER_BLOCK_OPENED_HEIGHT
    );

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
        setMenuBg(false);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (
          currentOffset < refPrevOffset.current ||
          currentOffset <= totalTopMenuHeight
        ) {
          // Has scroll up
          setShowMenu(true);
          setMenuBg(true);
        } else {
          // Has scroll down
          setShowMenu(false);
          setMenuBg(true);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  // exclude Home link from displayed in menu
  // const filteredLinks = links.filter((link) => link.label !== "Home");

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <FixedContainer
          showMenu={showMenu}
          height={isMobileMenuOpened ? 0 : totalTopMenuHeight}
        >
          {/*{showFishingWarn && (*/}
          {/*  <FishingWarn showFishingWarn={showFishingWarn}>*/}
          {/*    <StyledImgWarnIcon />*/}
          {/*    <Label>Beware of fake Biswap websites! Use only official site: biswap.org</Label>*/}
          {/*    <Button variant="text" scale="sm" onClick={closeWarn}>*/}
          {/*      <CloseIcon color="background" />*/}
          {/*    </Button>*/}
          {/*  </FishingWarn>*/}
          {/*)}*/}
          {banner && (
            <TopBannerContainer height={transferBannerHeight}>
              {banner(setTransferHeight)}
            </TopBannerContainer>
          )}
          <StyledNav menuBg={menuBg} isMobileMenuOpened={isMobileMenuOpened}>
            <Flex alignItems="center" justifyContent="center">
              <Logo
                logoSubtitle={customLogoSubtitle}
                href={homeLink?.href ?? "/"}
              />
              <MenuItems
                items={links}
                activeItem={activeItem}
                activeSubItem={activeSubItem}
                isMobileMenuOpened={isMobileMenuOpened}
                mobileMenuCallback={setIsMobileMenuOpened}
                baseAwsUrl={baseAwsUrl}
                mobileLangSelector={mobileLangSelector}
                ml={isMobile ? "12px" : "26px"}
              />
            </Flex>
            <Flex alignItems="center" height="100%">
              <RightSide isMobileMenuOpen={isMobileMenuOpened} />
            </Flex>
          </StyledNav>
          {/*{withEvent && isMobile && (*/}
          {/*  <BDayEvent*/}
          {/*    account={account}*/}
          {/*    login={login}*/}
          {/*    logout={logout}*/}
          {/*    callback={eventCallback}*/}
          {/*    href={homeLink?.href ?? "/"}*/}
          {/*    isSwap={isSwap}*/}
          {/*  />*/}
          {/*)}*/}
        </FixedContainer>
        <BodyWrapper>
          <Inner isPushed={false} showMenu={showMenu}>
            <>
              {/*<Box height={isMobileMenuOpened ? 0 : totalTopMenuHeight} />*/}
              {children}
              <Footer
                BSWPriceLabel={BSWPriceLabel}
                BSWPriceValue={BSWPriceValue}
                footerStatistic={footerStatistic}
                registerToken={registerToken}
                buyBswHandler={buyBswHandler}
                aboutLinks={aboutLinks}
                productLinks={productLinks}
                serviceLinks={serviceLinks}
                socialLinks={socialLinks}
                marketplaceLink={marketplaceLink}
                baseAwsUrl={baseAwsUrl}
                buyBswLabel={buyBswLabel}
              />
            </>
          </Inner>
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
