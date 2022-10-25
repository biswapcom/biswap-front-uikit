import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";

import { atom, useAtom } from "jotai";

import { isMobile } from "react-device-detect";

import Modal from "../Modal/Modal";
import { HelpOpacityIcon, WarningIcon } from "../../components/Svg";
import { ModalProps } from "../Modal";

// components
import Image from "../../components/Image/Image";
import { Text } from "../../components/Text";
import { ScrollWrapper, StyledText, WalletCardsWrapper } from "./styles";
import StyledButton from "../../components/Button/StyledButton";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";
import {
  LinkOfDevice,
  WalletConfigV2,
  WalletConnectorNotFoundError,
  WalletSwitchChainError,
} from "./types";
import { WALLET_SCREEN, walletLocalStorageKey } from "./config";
import BodyText from "../../components/Typography/BodyText";
import Flex from "../../components/Box/Flex";
import { HOW_TO_CONNECT_DOCS } from "../../config";

const Qrcode = lazy(() => import("../../components/QRCode/QRCode"));

interface WalletModalV2Props<T = unknown> extends ModalProps {
  wallets: WalletConfigV2<T>[];
  login: (connectorId: T) => Promise<any>;
  onDismiss?: () => void;
}

const errorAtom = atom<string>("");

const selectedWalletAtom = atom<WalletConfigV2<unknown> | null>(null);

export function useSelectedWallet<T>() {
  // @ts-ignore
  return useAtom<WalletConfigV2<T> | null>(selectedWalletAtom);
}

function MobileModal<T>({
  wallets,
  connectWallet,
  isWelcomeScreen,
}: Pick<WalletModalV2Props<T>, "wallets"> & {
  connectWallet: (wallet: WalletConfigV2<T>) => void;
  isWelcomeScreen?: boolean;
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
}: {
  wallets: WalletConfigV2<T>[];
  onClick: (wallet: WalletConfigV2<T>) => void;
}) {
  return (
    <ScrollWrapper>
      <WalletCardsWrapper>
        {wallets.map((wallet) => {
          const isImage = typeof wallet.icon === "string";
          const Icon = wallet.icon;

          return (
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
          );
        })}
      </WalletCardsWrapper>
    </ScrollWrapper>
  );
}

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
  isWelcomeScreen,
}: Pick<WalletModalV2Props<T>, "wallets"> & {
  connectWallet: (wallet: WalletConfigV2<T>) => void;
  isWelcomeScreen?: boolean;
}) {
  const [selected] = useSelectedWallet<T>();
  const [error] = useAtom(errorAtom);
  const [qrCode, setQrCode] = useState<string | undefined>(undefined);

  const connectToWallet = (wallet: WalletConfigV2<T>) => {
    connectWallet(wallet);
  };

  return (
    <>
      {isWelcomeScreen ? (
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
      ) : (
        <Flex
          //py="120px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {selected && selected.installed !== false && (
            <>
              {typeof selected.icon === "string" && (
                <Image src={selected.icon} width={160} height={160} />
              )}
              <Heading mt="24px" as="h1" scale="md" color="tooltip">
                Opening {selected.title}
              </Heading>
              {error ? (
                <ErrorContent
                  message={error}
                  onRetry={() => connectToWallet(selected)}
                />
              ) : (
                <BodyText mt="16px" as="p" scale="size16" color="gray900">
                  Please confirm in {selected.title}
                </BodyText>
              )}
            </>
          )}
          {selected && selected.installed === false && (
            <NotInstalled qrCode={qrCode} wallet={selected} />
          )}
        </Flex>
      )}
    </>
  );
}

export function ConnectModalV2<T = unknown>(props: WalletModalV2Props<T>) {
  const { wallets: _wallets, login, onDismiss, ...rest } = props;

  const [connectScreen, setConnectScreen] = useState(
    WALLET_SCREEN.WELCOME_SCREEN
  );

  const isWelcomeScreen = connectScreen === WALLET_SCREEN.WELCOME_SCREEN;

  const [lastUsedWalletName] = useAtom(lastUsedWalletNameAtom);

  const wallets = useMemo(
    () => sortWallets(_wallets, lastUsedWalletName),
    [_wallets, lastUsedWalletName]
  );
  const [, setSelected] = useSelectedWallet<T>();
  const [, setError] = useAtom(errorAtom);

  useEffect(() => {
    return () => {
      setSelected(null);
      setError("");
    };
  }, []);

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
    setConnectScreen(WALLET_SCREEN.CONNECTING_SCREEN);
    if (wallet.installed !== false) {
      login(wallet.connectorId)
        .then((v) => {
          if (v) {
            localStorage.setItem(walletLocalStorageKey, wallet.title);
            onDismiss?.();
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
      onDismiss={props.onDismiss}
      walletModal
      onBack={() => setConnectScreen(WALLET_SCREEN.WELCOME_SCREEN)}
      closeBtnColor="dark900"
      hideOnBack={isWelcomeScreen}
      title={isWelcomeScreen ? "Connect to a wallet" : "Back to wallets"}
      width={isMobile ? "100%" : "auto"}
      maxWidth={!isMobile ? "416px" : "none"}
      bodyPadding="0"
      position={isMobile ? "absolute" : "relative"}
      bottom="0"
      borderRadius={isMobile ? "16px 16px 0 0" : "16px"}
      modalBodyProps={{
        alignItems: "center",
      }}
      {...rest}
    >
      <>
        {isWelcomeScreen && (
          <>
            <StyledText
              fontSize="12px"
              ml={isMobile ? "16px" : "32px"}
              mb="24px"
            >
              By connecting a wallet, you agree to Biswap's{" "}
              <Text fontSize="12px" as="span" color="primary">
                <a
                  href={`${process.env.NEXT_PUBLIC_FRONT_1}/terms`}
                  target={isMobile ? "_self" : "_blank"}
                >
                  Terms of Use
                </a>
              </Text>
            </StyledText>
          </>
        )}
        {isMobile ? (
          <MobileModal
            isWelcomeScreen={isWelcomeScreen}
            connectWallet={connectWallet}
            wallets={wallets}
          />
        ) : (
          <DesktopModal
            isWelcomeScreen={isWelcomeScreen}
            connectWallet={connectWallet}
            wallets={wallets}
          />
        )}
        {isWelcomeScreen && (
          <>
            <BodyText as="span" mt="24px" textAlign="center" scale="size12">
              Haven’t got a crypto wallet yet?
            </BodyText>
            <Button
              startIcon={<HelpOpacityIcon color="white" width="24px" />}
              height="48px"
              width={isMobile ? "306px" : "352px"}
              as="a"
              color="primary"
              m={isMobile ? "16px 16px 32px" : "16px 32px 32px"}
              href={HOW_TO_CONNECT_DOCS}
              target={isMobile ? "_self" : "_blank"}
            >
              <Text as="span" color="contrast" bold>
                Learn How to Connect
              </Text>
            </Button>
          </>
        )}
      </>
    </Modal>
  );
}

const NotInstalled = ({
  wallet,
  qrCode,
}: {
  wallet: WalletConfigV2;
  qrCode?: string;
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
     // py="116px"
    >
      {!qrCode && typeof wallet.icon === "string" && (
        <Image src={wallet.icon} width={160} height={160} />
      )}
      <Heading as="h2" scale="md" color="tooltip">
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
        <BodyText
          mt="16px"
          textAlign="center"
          color="gray900"
          scale="size16"
          maxWidth="352px"
        >
          Please install the {wallet.title} browser extension to connect the{" "}
          {wallet.title} wallet.
        </BodyText>
      )}
      {wallet.guide && (
        <Button
          mt="16px"
          variant="primary"
          scale="lg"
          as="a"
          href={getDesktopLink(wallet.guide)}
          external
        >
          {getDesktopText(wallet.guide, "Setup Guide")}
        </Button>
      )}
      {wallet.downloadLink && (
        <Button
          mt="16px"
          variant="primary"
          scale="lg"
          as="a"
          href={getDesktopLink(wallet.downloadLink)}
          external
        >
          {getDesktopText(wallet.downloadLink, "Install")}
        </Button>
      )}
    </Flex>
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
      <Button variant="primary" scale="lg" onClick={onRetry}>
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
