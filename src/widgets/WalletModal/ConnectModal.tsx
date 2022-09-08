import React, { useMemo } from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../../widgets/Modal";
import WalletCard from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, ConnectorNames, Login } from "./types";
import { Flex, Box } from "../../components/Box";
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
  grid-gap: 8px;
  width: 352px;
  grid-template-columns: repeat(2, 1fr);
  max-height: 328px;
  margin-left: 32px;
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
  margin-right: 14px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 4px;
  }
  &::-webkit-scrollbar-track{
    background-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.colors.textSubtle};
  }
`

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
      title="Connect to a wallet" 
      onDismiss={onDismiss}
      maxWidth="416px"
      bodyPadding=""
      walletModal
    >
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

      <HelpLink
        href="https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap"
        external
      >
      <HelpIcon color="primary" mr="6px" />
        <Text color="primary" fontWeight="400">
          Learn how to connect
        </Text>
      </HelpLink>
    </Modal>
  );
};

export default ConnectModal;
