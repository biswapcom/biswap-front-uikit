import React, {
  FC,
  lazy,
  PropsWithChildren,
  Suspense,
  useMemo,
  useState,
} from "react";

// import { usePreloadImages } from '@pancakeswap/hooks'
// import { useTranslation } from '@pancakeswap/localization'
// import { AtomBox } from '@pancakeswap/ui/components/AtomBox'
// import {
//     Button,
//     Heading,
//     Image,
//     LinkExternal,
//     ModalV2,
//     ModalV2Props,
//     ModalWrapper,
//     MoreHorizontalIcon,
//     SvgProps,
//     Tab,
//     TabMenu,
//     Text,
//     WarningIcon,
// } from '@pancakeswap/uikit'

import { atom, useAtom } from "jotai";

import { isMobile } from "react-device-detect";
//import { StepIntro } from './components/Intro'
//import { getDocLink } from './docLangCodeMapping'
import Modal from "../Modal/Modal";
import { SvgProps, WarningIcon } from "../../components/Svg";
import { ModalProps } from "../Modal";

// components
import Image from "../../components/Image/Image";
import { Text } from "../../components/Text";
import { ScrollWrapper, StyledText, WalletCardsWrapper } from "./styles";
import StyledButton from "../../components/Button/StyledButton";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";
import { usePreloadImages } from "../../hooks/usePreloadImage";

// import {
//     desktopWalletSelectionClass,
//     modalWrapperClass,
//     walletIconClass,
//     promotedGradientClass,
//     walletSelectWrapperClass,
// } from './WalletModal.css'

const Qrcode = lazy(() => import("../../components/QRCode/QRCode"));

type LinkOfTextAndLink = string | { text: string; url: string };

type DeviceLink = {
  desktop?: LinkOfTextAndLink;
  mobile?: LinkOfTextAndLink;
};

type LinkOfDevice = string | DeviceLink;

export type WalletConfigV2<T = unknown> = {
  id: string;
  title: string;
  icon: string | FC<React.PropsWithChildren<SvgProps>>;
  connectorId: T;
  deepLink?: string;
  installed?: boolean;
  guide?: LinkOfDevice;
  downloadLink?: LinkOfDevice;
  mobileOnly?: boolean;
  qrCode?: () => Promise<string>;
};

interface WalletModalV2Props<T = unknown> extends ModalProps {
  wallets: WalletConfigV2<T>[];
  login: (connectorId: T) => Promise<any>;
}

export class WalletConnectorNotFoundError extends Error {}

export class WalletSwitchChainError extends Error {}

const errorAtom = atom<string>("");

const selectedWalletAtom = atom<WalletConfigV2<unknown> | null>(null);

export function useSelectedWallet<T>() {
  // @ts-ignore
  return useAtom<WalletConfigV2<T> | null>(selectedWalletAtom);
}

// const TabContainer = ({ children }: PropsWithChildren) => {
//     const [index, setIndex] = useState(0)
//     const { t } = useTranslation()
//
//     return (
//         <AtomBox position="relative" zIndex="modal" className={modalWrapperClass}>
//             <AtomBox position="absolute" style={{ top: '-50px' }}>
//                 <TabMenu activeIndex={index} onItemClick={setIndex} gap="16px" isColorInverse>
//                     <Tab>{t('Connect Wallet')}</Tab>
//                     <Tab>{t('What’s a Web3 Wallet?')}</Tab>
//                 </TabMenu>
//             </AtomBox>
//             <AtomBox
//                 display="flex"
//                 position="relative"
//                 background="gradientCardHeader"
//                 borderRadius="card"
//                 borderBottomRadius={{
//                     xs: '0',
//                     md: 'card',
//                 }}
//                 zIndex="modal"
//                 width="full"
//             >
//                 {index === 0 && children}
//                 {index === 1 && <StepIntro />}
//             </AtomBox>
//         </AtomBox>
//     )
// }

const MOBILE_DEFAULT_DISPLAY_COUNT = 6;

function MobileModal<T>({
  wallets,
  connectWallet,
}: Pick<WalletModalV2Props<T>, "wallets"> & {
  connectWallet: (wallet: WalletConfigV2<T>) => void;
}) {
  const [selected] = useSelectedWallet();
  const [error] = useAtom(errorAtom);

  const installedWallets: WalletConfigV2<T>[] = wallets.filter(
    (w) => w.installed
  );
  const walletsToShow: WalletConfigV2<T>[] = wallets.filter((w) => {
    if (installedWallets.length) {
      return w.installed;
    }
    return w.installed !== false || w.deepLink;
  });

  return (
    <div>
      {error ? (
        <div>
          {selected && typeof selected.icon === "string" && (
            <Image src={selected.icon} width={108} height={108} />
          )}
          <div style={{ maxWidth: "246px" }}>
            <ErrorMessage message={error} />
          </div>
        </div>
      ) : (
        <Text color="textSubtle" small p="24px">
          Start by connecting with one of the wallets below. Be sure to store
          your private keys or seed phrase securely. Never share them with
          anyone.
        </Text>
      )}
      <div>
        <WalletSelect
          displayCount={MOBILE_DEFAULT_DISPLAY_COUNT}
          wallets={walletsToShow}
          onClick={(wallet) => {
            connectWallet(wallet);
            if (wallet.deepLink && wallet.installed === false) {
              window.open(wallet.deepLink);
            }
          }}
        />
      </div>
      <div>
        <div>
          <Text textAlign="center" color="textSubtle" as="p" mb="24px">
            Haven’t got a crypto wallet yet?
          </Text>
        </div>
        {/*<Button as="a" href={getDocLink(code)} variant="subtle" width="100%" external>*/}
        {/*    {t('Learn How to Connect')}*/}
        {/*</Button>*/}
      </div>
    </div>
  );
}

function WalletSelect<T>({
  wallets,
  onClick,
  displayCount = 5,
}: {
  wallets: WalletConfigV2<T>[];
  onClick: (wallet: WalletConfigV2<T>) => void;
  displayCount?: number;
}) {
  //  const { t } = useTranslation()
  const [showMore, setShowMore] = useState(false);
  const walletsToShow = showMore ? wallets : wallets.slice(0, displayCount);
  const [selected] = useSelectedWallet();
  return (
    <ScrollWrapper>
      <WalletCardsWrapper>
        {walletsToShow.map((wallet) => {
          const isImage = typeof wallet.icon === "string";
          const Icon = wallet.icon;

          return (
            // <Button
            //     key={wallet.id}
            //     variant="text"
            //     height="auto"
            //     as={AtomBox}
            //     display="flex"
            //     alignItems="center"
            //     style={{ justifyContent: 'flex-start', letterSpacing: 'normal', padding: '0' }}
            //     flexDirection="column"
            //     onClick={() => onClick(wallet)}
            // >
            //     <AtomBox className={wallet.installed && promotedGradientClass} p="1px" borderRadius="12px" mb="4px">
            <StyledButton
              key={wallet.id}
              scale="xl"
              variant="tertiary"
              id={`wallet-connect-${wallet.title.toLowerCase()}`}
              onClick={() => onClick(wallet)}
            >
              {isImage ? (
                <Image src={Icon as string} width={50} height={50} />
              ) : (
                <Icon width={24} height={24} color="textSubtle" />
              )}
              <Text ml="8px" bold color="primary" fontSize="12px">
                {wallet.title}
              </Text>
              {/*{wallet.id === selected?.id && (*/}
              {/*    <AtomBox position="absolute" inset="0" bgc="secondary" opacity="0.5" borderRadius="12px" />*/}
              {/*)}*/}
            </StyledButton>
            // </AtomBox>
            // <Text fontSize="12px" textAlign="center">
            //     {wallet.title}
            // </Text>
            // </Button>
          );
        })}
        {/*{!showMore && wallets.length > displayCount && (*/}
        {/*    <AtomBox display="flex" justifyContent="center" alignItems="center" flexDirection="column">*/}
        {/*        <Button height="auto" variant="text" as={AtomBox} flexDirection="column" onClick={() => setShowMore(true)}>*/}
        {/*            <AtomBox*/}
        {/*                className={walletIconClass}*/}
        {/*                display="flex"*/}
        {/*                justifyContent="center"*/}
        {/*                alignItems="center"*/}
        {/*                bgc="dropdown"*/}
        {/*            >*/}
        {/*                <MoreHorizontalIcon color="text" />*/}
        {/*            </AtomBox>*/}
        {/*            <Text fontSize="12px" textAlign="center" mt="4px">*/}
        {/*                {t('More')}*/}
        {/*            </Text>*/}
        {/*        </Button>*/}
        {/*    </AtomBox>*/}
        {/*)}*/}
      </WalletCardsWrapper>
    </ScrollWrapper>
  );
}

export const walletLocalStorageKey = "wallet";

const lastUsedWalletNameAtom = atom<string>("");

lastUsedWalletNameAtom.onMount = (set) => {
  const preferred = localStorage?.getItem(walletLocalStorageKey);
  if (preferred) {
    set(preferred);
  }
};

function sortWallets<T>(
  wallets: WalletConfigV2<T>[],
  lastUsedWalletName: string | null
) {
  const sorted = [...wallets].sort((a, b) => {
    if (a.installed === b.installed) return 0;
    return a.installed === true ? -1 : 1;
  });

  if (!lastUsedWalletName) {
    return sorted;
  }
  const foundLastUsedWallet = wallets.find(
    (w) => w.title === lastUsedWalletName
  );
  if (!foundLastUsedWallet) return sorted;
  return [
    foundLastUsedWallet,
    ...sorted.filter((w) => w.id !== foundLastUsedWallet.id),
  ];
}

function DesktopModal<T>({
  wallets,
  connectWallet,
}: Pick<WalletModalV2Props<T>, "wallets"> & {
  connectWallet: (wallet: WalletConfigV2<T>) => void;
}) {
  const [selected] = useSelectedWallet<T>();
  const [error] = useAtom(errorAtom);
  const [qrCode, setQrCode] = useState<string | undefined>(undefined);
  //const { t } = useTranslation()

  const connectToWallet = (wallet: WalletConfigV2<T>) => {
    connectWallet(wallet);
  };

  return (
    <>
      {/*<AtomBox*/}
      {/*    display="flex"*/}
      {/*    flexDirection="column"*/}
      {/*    bg="backgroundAlt"*/}
      {/*    py="32px"*/}
      {/*    zIndex="modal"*/}
      {/*    borderRadius="card"*/}
      {/*    className={desktopWalletSelectionClass}*/}
      {/*>*/}
      {/*<AtomBox px="48px">*/}
      {/*    <Heading color="color" as="h4">*/}
      {/*        {'Connect Wallet'}*/}
      {/*    </Heading>*/}
      {/*    <Text color="textSubtle" small pt="24px" pb="32px">*/}
      {/*        {t(*/}
      {/*            'Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.',*/}
      {/*        )}*/}
      {/*    </Text>*/}
      {/*</AtomBox>*/}
      <WalletSelect
        wallets={wallets}
        onClick={(w) => {
          connectToWallet(w);
          setQrCode(undefined);
          if (w.qrCode) {
            w.qrCode().then((uri) => {
              setQrCode(uri);
            });
          }
        }}
      />
      {/*</AtomBox>*/}
      <div
      // flex={1}
      // mx="24px"
      // display={{
      //     xs: 'none',
      //     sm: 'flex',
      // }}
      // justifyContent="center"
      // flexDirection="column"
      // alignItems="center"
      >
        <div>
          {/*{!selected && <Intro />}*/}
          {selected && selected.installed !== false && (
            <>
              {typeof selected.icon === "string" && (
                <Image src={selected.icon} width={108} height={108} />
              )}
              <Heading as="h1" fontSize="20px" color="secondary">
                Opening {selected.title}
              </Heading>
              {error ? (
                <ErrorContent
                  message={error}
                  onRetry={() => connectToWallet(selected)}
                />
              ) : (
                <Text>Please confirm in {selected.title}</Text>
              )}
            </>
          )}
          {selected && selected.installed === false && (
            <NotInstalled qrCode={qrCode} wallet={selected} />
          )}
        </div>
      </div>
      {/*</AtomBox>*/}
    </>
  );
}

export function ConnectModalV2<T = unknown>(props: WalletModalV2Props<T>) {
  const { wallets: _wallets, login, ...rest } = props;

  console.log("wa", _wallets);

  const [lastUsedWalletName] = useAtom(lastUsedWalletNameAtom);

  const wallets = useMemo(
    () => sortWallets(_wallets, lastUsedWalletName),
    [_wallets, lastUsedWalletName]
  );
  const [, setSelected] = useSelectedWallet<T>();
  const [, setError] = useAtom(errorAtom);

  // const imageSources = useMemo(
  //     () =>
  //         wallets
  //             .map((w) => w.icon)
  //             .filter((icon) => typeof icon === 'string'),
  //     [wallets],
  // )
  //
  // usePreloadImages(imageSources.slice(0, MOBILE_DEFAULT_DISPLAY_COUNT))

  const connectWallet = (wallet: WalletConfigV2<T>) => {
    setSelected(wallet);
    setError("");
    if (wallet.installed !== false) {
      login(wallet.connectorId)
        .then((v) => {
          if (v) {
            localStorage.setItem(walletLocalStorageKey, wallet.title);
          }
        })
        .catch((err) => {
          if (err instanceof WalletConnectorNotFoundError) {
            setError("no provider found");
          } else if (err instanceof WalletSwitchChainError) {
            setError(err.message);
          } else {
            setError("Error connecting, please authorize wallet to access.");
          }
        });
    }
  };

  return (
    <Modal
      {...rest}
      onDismiss={props.onDismiss}
      walletModal
      title="Connect to a wallet"
      //onDismiss={onDismiss}
      width={isMobile ? "100%" : "auto"}
      maxWidth={!isMobile ? "416px" : "none"}
      bodyPadding="0"
      position={isMobile ? "absolute" : "relative"}
      bottom="0"
      borderRadius={isMobile ? "16px 16px 0 0" : "16px"}
      modalBodyProps={{
        alignItems: "center",
      }}
    >
      <StyledText fontSize="12px" ml={isMobile ? "16px" : "32px"} mb="24px">
        By connecting a wallet, you agree to Biswap's{" "}
        <Text fontSize="12px" as="span" color="primary">
          <a
            href={`${process.env.REACT_APP_FRONT_1}/terms`}
            target={isMobile ? "_self" : "_blank"}
          >
            Terms of Use
          </a>
        </Text>
      </StyledText>
      {/*<ModalWrapper style={{ overflow: 'visible', border: 'none' }}>*/}
      {/*    <AtomBox position="relative">*/}
      <div>
        {isMobile ? (
          <MobileModal connectWallet={connectWallet} wallets={wallets} />
        ) : (
          <DesktopModal connectWallet={connectWallet} wallets={wallets} />
        )}
      </div>
      {/*    </AtomBox>*/}
      {/*</ModalWrapper>*/}
    </Modal>
  );
}

//const Intro = () => {
//   const {
//     t,
//     currentLanguage: { code },
//   } = useTranslation()
//   return (
//     <>
//       <Heading as="h1" fontSize="20px" color="secondary">
//         {t('Haven’t got a wallet yet?')}
//       </Heading>
//       <Image src="https://cdn.pancakeswap.com/wallets/wallet_intro.png" width={198} height={178} />
//       <Button as={LinkExternal} color="backgroundAlt" variant="subtle" href={getDocLink(code)}>
//         {t('Learn How to Connect')}
//       </Button>
//     </>
//   )
// }

const NotInstalled = ({
  wallet,
  qrCode,
}: {
  wallet: WalletConfigV2;
  qrCode?: string;
}) => {
  return (
    <>
      <Heading as="h1" fontSize="20px" color="secondary">
        {wallet.title} is not installed
      </Heading>
      {qrCode && (
        <Suspense>
          <Box
            overflow="hidden"
            borderRadius="card"
            style={{ width: "288px", height: "288px" }}
          >
            <Qrcode
              url={qrCode}
              image={typeof wallet.icon === "string" ? wallet.icon : undefined}
            />
          </Box>
        </Suspense>
      )}
      {!qrCode && (
        <Text maxWidth="246px" m="auto">
          Please install the {wallet.title} browser extension to connect the{" "}
          {wallet.title} wallet.
        </Text>
      )}
      {wallet.guide && (
        <Button
          variant="text"
          as="a"
          href={getDesktopLink(wallet.guide)}
          external
        >
          {getDesktopText(wallet.guide, "Setup Guide")}
        </Button>
      )}
      {wallet.downloadLink && (
        <Button
          variant="text"
          as="a"
          href={getDesktopLink(wallet.downloadLink)}
          external
        >
          {getDesktopText(wallet.downloadLink, "Install")}
        </Button>
      )}
    </>
  );
};

const ErrorMessage = ({ message }: { message: string }) => (
  <Text bold color="failure">
    <WarningIcon
      width="16px"
      color="failure"
      style={{ verticalAlign: "middle" }}
    />{" "}
    {message}
  </Text>
);

const ErrorContent = ({
  onRetry,
  message,
}: {
  onRetry: () => void;
  message: string;
}) => {
  return (
    <>
      <ErrorMessage message={message} />
      <Button variant="text" onClick={onRetry}>
        Retry
      </Button>
    </>
  );
};

const getDesktopLink = (linkDevice: LinkOfDevice) =>
  typeof linkDevice === "string"
    ? linkDevice
    : typeof linkDevice.desktop === "string"
    ? linkDevice.desktop
    : linkDevice.desktop?.url;

const getDesktopText = (linkDevice: LinkOfDevice, fallback: string) =>
  typeof linkDevice === "string"
    ? fallback
    : typeof linkDevice.desktop === "string"
    ? fallback
    : linkDevice.desktop?.text ?? fallback;
