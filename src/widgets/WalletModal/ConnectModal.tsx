import React from "react";

// ui
import styled from "styled-components";

// components
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../../widgets/Modal";
import WalletCard from "./WalletCard";
import { Text } from "../../components/Text";
import { Flex } from "../../components/Box";

// utils
import { walletLocalStorageKey } from "./config";
import {Login, WalletConfig} from "./types";
import {HOW_TO_CONNECT_DOCS} from "../../config";

// props
interface Props<T> {
  login: Login<T>;
  onDismiss?: () => void;
  wallets: WalletConfig<T>[];
}

// styles
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

const getPriority = (priority: WalletConfig["priority"]) => (typeof priority === "function" ? priority() : priority);

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
function getPreferredConfig<T>(walletConfig: WalletConfig<T>[]) {
  const sortedConfig = walletConfig.sort(
      (a: WalletConfig<T>, b: WalletConfig<T>) => getPriority(a.priority) - getPriority(b.priority)
  );

  const preferredWalletName = localStorage?.getItem(walletLocalStorageKey);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
}

function ConnectModal<T> ({ login, onDismiss = () => null, wallets: connectors }: Props<T>) {

  const sortedConfig = getPreferredConfig(connectors);

  // Filter out WalletConnect if user is inside TrustWallet built-in browser
  const walletsToShow =
      // @ts-ignore
      window.ethereum?.isTrust &&
      // @ts-ignore
      !window?.ethereum?.isSafePal
          ? sortedConfig.filter((wallet) => wallet.title !== "WalletConnect")
          : sortedConfig;

  return (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>
      <Flex flexDirection="column">
        <WalletCardsWrapper>
          {walletsToShow.map((entry) => (
            <WalletCard
              key={entry.title}
              login={login}
              walletConfig={entry}
              onDismiss={onDismiss}
            />
          ))}
        </WalletCardsWrapper>
        <HelpLink
          href={HOW_TO_CONNECT_DOCS}
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
}

export default ConnectModal;
