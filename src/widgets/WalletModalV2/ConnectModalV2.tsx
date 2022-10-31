import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";

import { atom, useAtom } from "jotai";
import { isMobile } from "react-device-detect";

// components
import Image from "../../components/Image/Image";
import Modal from "../Modal/Modal";
import { HelpOpacityIcon, WarningCycleIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
import {
  ConnectWrapper,
  ScrollWrapper,
  StyledText,
  WalletCardsWrapper,
} from "./styles";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";
import BodyText from "../../components/Typography/BodyText";
import Flex from "../../components/Box/Flex";

// config
import { HOW_TO_CONNECT_DOCS } from "../../config";
import { WALLET_SCREEN, walletLocalStorageKey } from "./config";

// styles
import { StyledButton } from "./styles";

// types
import {
  LinkOfDevice,
  WalletConfigV2,
  WalletConnectorNotFoundError,
  WalletModalV2Props,
  WalletSwitchChainError,
} from "./types";

const Qrcode = lazy(() => import("../../components/QRCode/QRCode"));

const errorAtom = atom<string>("");

const selectedWalletAtom = atom<WalletConfigV2<unknown> | null>(null);

export function useSelectedWallet<T>() {
  // @ts-ignore
  return useAtom<WalletConfigV2<T> | null>(selectedWalletAtom);
}

function MobileModal<T>({
  wallets,
  connectWallet,
}: Pick<WalletModalV2Props<T>, "wallets"> & {
  connectWallet: (wallet: WalletConfigV2<T>) => void;
  isWelcomeScreen?: boolean;
}) {
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
    <>
      {error ? (
        <ErrorContent onRetry={() => console.info("retry")} />
      ) : (
        <WalletSelect
          wallets={walletsToShow}
          onClick={(wallet) => {
            connectWallet(wallet);
            if (wallet.deepLink && wallet.installed === false) {
              window.open(wallet.deepLink);
            }
          }}
        />
      )}
    </>
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
                <Image src={Icon as string} width={24} height={24} />
              ) : (
                <Icon width={24} height={24} color="gray200" />
              )}
              <BodyText ml="8px" bold color="primary" scale="size12">
                {wallet.title}
              </BodyText>
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
        <ConnectWrapper>
          {error && selected && selected.installed !== false ? (
            <ErrorContent onRetry={() => connectToWallet(selected)} />
          ) : (
            <>
              {selected && selected.installed !== false && (
                <>
                  {typeof selected.icon === "string" && (
                    <Image src={selected.icon} width={160} height={160} />
                  )}
                  <Heading mt="24px" as="h2" scale="md" color="tooltip">
                    Opening {selected.title}
                  </Heading>
                  <BodyText mt="16px" as="p" scale="size16" color="gray900">
                    Please confirm in {selected.title}
                  </BodyText>
                </>
              )}
              {selected && selected.installed === false && (
                <NotInstalled qrCode={qrCode} wallet={selected} />
              )}
            </>
          )}
        </ConnectWrapper>
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

  const connectWallet = (wallet: WalletConfigV2<T>) => {
    setSelected(wallet);
    setConnectScreen(WALLET_SCREEN.CONNECTING_SCREEN);
    setError("");
    if (
      wallet.installed !== false ||
      (wallet.id === "trust" && !wallet.installed)
    ) {
      login(wallet.connectorId)
        .then((v) => {
          if (v) {
            localStorage.setItem(walletLocalStorageKey, wallet.title);
            onDismiss?.();
          }
          onDismiss?.();
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
      onDismiss={onDismiss}
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
}): JSX.Element => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {!qrCode && typeof wallet.icon === "string" && (
        <Image mb="16px" src={wallet.icon} width={160} height={160} />
      )}
      <Heading as="h2" scale="md" color={qrCode ? "gray900" : "tooltip"}>
        {wallet.title} is not installed
      </Heading>
      {qrCode && (
        <Suspense>
          <Box
            mt="16px"
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
      {wallet.downloadLink && (
        <Button
          width="100%"
          mt="76px"
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

const ErrorMessage = (): JSX.Element => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <WarningCycleIcon width={160} height={160} />
    <Heading my="16px" color="tooltip" scale="md" as="h3">
      Your wallet is not connected
    </Heading>
    <BodyText color="gray900" scale="size16">
      Please, try connecting your wallet again.
    </BodyText>
  </Flex>
);

const ErrorContent = ({ onRetry }: { onRetry: () => void }): JSX.Element => {
  return (
    <>
      <ErrorMessage />
      <Button
        mt="88px"
        width="80%"
        variant="primary"
        scale="lg"
        onClick={onRetry}
      >
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
