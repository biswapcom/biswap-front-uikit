import React, { useMemo } from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../../widgets/Modal";
import WalletCard from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, ConnectorNames, Login } from "./types";
import { Flex } from "../../components/Box";
import { useMatchBreakpoints } from "../../hooks";
import { Text } from "../../components/Text";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 40px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 24px;
  }
`;

const WalletCardsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
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
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>
      <Flex flexDirection="column">
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
        <HelpLink
          href="https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap"
          external
        >
          <HelpIcon color="primary" mr="6px" />
          <Text color="primary" fontWeight="400">
            Learn how to connect
          </Text>
        </HelpLink>
      </Flex>
    </Modal>
  );
};

export default ConnectModal;
