import React, { useMemo } from "react";
import styled from "styled-components";

// components
import { HelpOpacityIcon } from "../../components/Svg";
import { Modal } from "../../widgets/Modal";
import WalletCard from "./WalletCard";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

// hooks
import { useMatchBreakpoints } from "../../contexts";

// utils
import { getRgba } from "../../util";

// config
import config, {
  HOW_TO_CONNECT_WALLET_LINK,
  walletLocalStorageKey,
} from "./config";

// types
import { Config, ConnectorNames, Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const WalletCardsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  max-height: 50vh;
  margin-left: 16px;
  padding-right: 6px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 0;
    width: 352px;
    margin-left: 32px;
  }
`;

const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort(
    (a: Config, b: Config) => a.priority - b.priority
  );

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find(
    (sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName
  );

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter(
      (sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName
    ),
  ];
};

const ScrollWrapper = styled(Box)`
  overflow-x: hidden;
  margin-right: 6px;
  align-self: stretch;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 14px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      getRgba(theme.colors.pastelBlue, theme, 0.24)};
  }
`;

const StyledText = styled(Text)`
  align-self: flex-start;
`;

const DefaultTextButton = styled(Button)`
  font-size: 14px;
  font-weight: 400;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const { isMobile } = useMatchBreakpoints();

  const sortedConfig = useMemo(
    () =>
      getPreferredConfig(
        isMobile
          ? config.map((item) =>
              item.title === "TrustWallet"
                ? { ...item, connectorId: ConnectorNames.Injected }
                : item
            )
          : config
      ),
    [isMobile]
  );

  return (
    <Modal
      walletModal
      title="Connect to a wallet"
      onDismiss={onDismiss}
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
            href={`${process.env.NEXT_PUBLIC_FRONT_1}/terms`}
            target={isMobile ? "_self" : "_blank"}
          >
            Terms of Use
          </a>
        </Text>
      </StyledText>
      <ScrollWrapper>
        <WalletCardsWrapper>
          {sortedConfig.map((entry) => (
            <WalletCard
              key={entry.title}
              login={login}
              walletConfig={entry}
              onDismiss={onDismiss}
            />
          ))}
        </WalletCardsWrapper>
      </ScrollWrapper>
      <Text as="span" mt="24px" textAlign="center" fontSize="12px">
        Haven’t got a crypto wallet yet?
      </Text>
      <Button
        startIcon={<HelpOpacityIcon color="white" width="24px" />}
        height="48px"
        width={isMobile ? "306px" : "352px"}
        as="a"
        color="primary"
        m={isMobile ? "16px 16px 32px" : "16px 32px 32px"}
        href={HOW_TO_CONNECT_WALLET_LINK}
        target={isMobile ? "_self" : "_blank"}
      >
        <Text as="span" color="contrast" bold>
          Learn How to Connect
        </Text>
      </Button>
    </Modal>
  );
};

export default ConnectModal;
