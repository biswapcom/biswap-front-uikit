import noop from "lodash/noop";
import React, { FC, useState } from "react";
import { BrowserRouter, Link, MemoryRouter } from "react-router-dom";
import Box from "../../components/Box/Box";
import Flex from "../../components/Box/Flex";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import Heading from "../../components/Heading/Heading";
import { OptionsSolidIcon, DownloadIcon } from "../../components/Svg";
import Text from "../../components/Text/Text";
import { BodyText } from "../../components/Typography";
import { Modal, ModalProps, useModal } from "../Modal";

import {
  BSWPriceValue,
  BSWPriceLabel,
  footerStatistic,
  aboutLinks,
  productLinks,
  serviceLinks,
  socialLinks,
  links,
  userMenulinks,
} from "./config";
import Menu from "./Menu";
import { NavProps } from "./types";
import { ExpandableButton } from "../../components/Button";
import styled, { css } from "styled-components";
import { HeroWrapper } from "../../components/Layouts";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {
    activeItem: {
      options: ["Trade", "Earn", "Win"],
      control: { type: "select" },
    },
  },
};

// const UserMenuComponent: React.FC<{
//   variant?: Variant;
//   text?: string;
//   account?: string;
// }> = ({
//   variant = variants.DEFAULT,
//   text,
//   account = "0x8b017905DC96B38f817473dc885F84D4C76bC113",
// }) => {
//   const accountEllipsis = account
//     ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}`
//     : undefined;
//   return (
//     <DropdownMenu items={userMenulinks} py="12px">
//       <UserMenu
//         account={text || accountEllipsis}
//         avatarSrc=""
//         variant={variant}
//       />
//     </DropdownMenu>
//   );
// };

const GlobalMenuModal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  ...props
}) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <Heading>{title}</Heading>
    <Button>This button Does nothing</Button>
  </Modal>
);

const GlobalMenuComponent: React.FC = () => {
  const [onPresent1] = useModal(
    <GlobalMenuModal title="Display Settings Modal" />
  );
  const [onPresent2] = useModal(
    <GlobalMenuModal title="Global Settings Modal" />
  );

  return (
    <Flex>
      <IconButton onClick={onPresent1} variant="text" scale="sm" mr="4px">
        <DownloadIcon height={22} width={22} color="textSubtle" />
      </IconButton>
      <IconButton onClick={onPresent2} variant="text" scale="sm" mr="8px">
        <OptionsSolidIcon height={22} width={22} color="textSubtle" />
      </IconButton>
    </Flex>
  );
};

const UserMenuTest = ({ isMobileMenuOpen = false }) => (
  <BodyText color="white">{isMobileMenuOpen.toString()} test</BodyText>
);

const defaultProps = {
  linkComponent: ({ href, ...props }) => {
    return <Link to={href} {...props} />;
  },
  // account: "0xbdda50183d817c3289f895a4472eb475967dc980",
  //login: noop,
  // logout: noop,
  // isDark: false,
  // toggleTheme: noop,
  // langs,
  // setLang: noop,
  // currentLang: "EN",
  bswPriceUsd: 0.023158668932877668,
  links,
  subLinks: [
    {
      label: "Home",
      href: "/",
    },
  ],
  // profile: null,

  //  userMenu: (
  //    <UserMenuComponent account="0xbdda50183d817c3289f895a4472eb475967dc980" />
  //  ),
  //globalMenu: <GlobalMenuComponent />,
  activeItem: "/swap",
  activeSubItem: "https://exchange.biswap.org",
  buyCakeLabel: "Buy BSW",
  withEvent: true,
  eventCallback: noop,
  rightSide: UserMenuTest,
};

const Extended = styled(Flex)<{ expanded: boolean }>`
  max-height: 0;
  height: 0;
  transform: scaleY(0);
  visibility: hidden;
  transition: transform 0.3s ease-out;
  transform-origin: top;

  ${({ expanded }) =>
    expanded &&
    css`
      max-height: 100px;
      height: 100px;
      transform: scaleY(1);
      visibility: visible;
      transition: transform 0.3s ease-in;
    `};
`;

const ContentWrap = styled(Box)`
  transition: padding-top 0.25s ease-in;
`;

const ClickableWrapper = styled(Flex)`
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

const Banner: FC<{
  setHeight?: (i: boolean) => void;
  setBannerHeight?: (i: number) => void;
}> = ({ setHeight, setBannerHeight }) => {
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    setHeight && setHeight(expanded);
    setBannerHeight && setBannerHeight(expanded ? 0 : 116);
    setExpanded(!expanded);
  };

  return (
    <Flex flexDirection="column" px="16px" background="#071C3C">
      <ClickableWrapper onClick={onClick}>
        <BodyText>Title</BodyText>
        <ExpandableButton expanded={expanded}>Details</ExpandableButton>
      </ClickableWrapper>
      <Extended expanded={expanded} mt="16px" background="#07162D">
        <Button width="100%" mx="4px">
          Step1
        </Button>
        <Button width="100%" mx="4px">
          Step2
        </Button>
        <Button width="100%" mx="4px">
          Step3
        </Button>
      </Extended>
    </Flex>
  );
};

const ConnectedTemplate: React.FC<NavProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bannerHeight, setBannerHeight] = useState<number>(0);

  const renderContent = Array.from({ length: 30 }, (v, i) => i).map((el) => (
    <Text as="p" mt="32px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    </Text>
  ));

  return (
    <BrowserRouter>
      <Box background="#071C3C">
        <Menu
          {...args}
          BSWPriceLabel={BSWPriceLabel}
          BSWPriceValue={BSWPriceValue}
          footerStatistic={footerStatistic}
          registerToken={noop}
          aboutLinks={aboutLinks}
          productLinks={productLinks}
          socialLinks={socialLinks}
          serviceLinks={serviceLinks}
          buyBswLabel={"Buy bsdt"}
          banner={(setHeight?: (s: boolean) => void) => (
            <Banner setHeight={setHeight} setBannerHeight={setBannerHeight} />
          )}
        >
          <ContentWrap
            pt={`${bannerHeight + 116}px`}
            pb="32px"
            px="24px"
            background="#071C3C"
          >
            <Text bold fontSize="24px" as="h1" mb="8px" color="white">
              Page body
            </Text>
            <Button scale="sm" onClick={() => setIsOpen(!isOpen)}>
              Show mobile drawer
            </Button>
            {/*<BottomDrawer*/}
            {/*  content={<Box p="16px">Example</Box>}*/}
            {/*  isOpen={isOpen}*/}
            {/*  setIsOpen={setIsOpen}*/}
            {/*/>*/}
            {renderContent}
          </ContentWrap>
        </Menu>
      </Box>
    </BrowserRouter>
  );
};
export const Connected = ConnectedTemplate.bind({});
Connected.args = defaultProps;

export const ConnectedWithBanner = ConnectedTemplate.bind({});
ConnectedWithBanner.args = {
  ...defaultProps,
  banner: (setHeight: () => void) => <Banner setHeight={setHeight} />,
};

export const NotConnected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        // isDark={false}
        //   toggleTheme={noop}
        // langs={langs}
        //setLang={noop}
        // currentLang="EN"
        links={links}
        rightSide={UserMenuTest}
        //subLinks={subLinks}
      >
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithoutConnectButton: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        // isDark={false}
        //toggleTheme={noop}
        // langs={langs}
        // setLang={noop}
        // currentLang="EN"
        links={links}
        // subLinks={subLinks}
      >
        <div>
          <h1>No connect button on top</h1>
          This variant is needed for info site
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithSubmenuSelected: React.FC = () => {
  return (
    <MemoryRouter initialEntries={["/teams"]}>
      <Menu
        BSWPriceLabel={BSWPriceLabel}
        BSWPriceValue={BSWPriceValue}
        footerStatistic={footerStatistic}
        registerToken={noop}
        aboutLinks={aboutLinks}
        productLinks={productLinks}
        socialLinks={socialLinks}
        serviceLinks={serviceLinks}
        links={links}
        subLinks={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Home",
            href: "/",
          },
        ]}
        buyBswLabel={"Buy bsdt"}
      >
        <div style={{ paddingTop: "72px" }}>
          <Heading as="h1" mb="8px">
            Submenu leaderboard selected
          </Heading>
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </MemoryRouter>
  );
};

// export const UserMenuWithVariants:  React.FC<React.PropsWithChildren> = () => {
//   const [variant, setVariant] = useState<Variant>(variants.DEFAULT);
//   const [text, setText] = useState(undefined);
//
//   const handleChange = (evt) => {
//     const { value } = evt.target;
//     setText(value);
//   };
//
//   return (
//     <BrowserRouter>
//       <Box p="40px">
//         <Flex justifyContent="space-between">
//           <Box>
//             <Heading size="sm" mb="16px">
//               Variants
//             </Heading>
//             <Flex mb="16px">
//               {Object.keys(variants).map((variantKey) => (
//                 <Button
//                   scale="sm"
//                   variant={
//                     variant === variants[variantKey] ? "primary" : "text"
//                   }
//                   ml="8px"
//                   onClick={() => setVariant(variants[variantKey])}
//                 >
//                   {variants[variantKey].toUpperCase()}
//                 </Button>
//               ))}
//             </Flex>
//             <Box py="8px">
//               <Input
//                 value={text}
//                 onChange={handleChange}
//                 placeholder="Custom Text..."
//               />
//             </Box>
//           </Box>
//           <UserMenuComponent variant={variant} text={text} />
//         </Flex>
//       </Box>
//     </BrowserRouter>
//   );
// };
