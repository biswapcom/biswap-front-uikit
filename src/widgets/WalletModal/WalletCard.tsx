import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  width: 100%;

  background: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 172px;
  }
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const handleClick = () => {
    login(
      walletConfig.connectorId,
      walletConfig.instanceCheckRule,
      walletConfig.helpHref
    );
    localStorage.setItem(walletLocalStorageKey, walletConfig.title);
    window.localStorage.setItem(
      connectorLocalStorageKey,
      walletConfig.connectorId
    );
    onDismiss();
  };

  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      scale="xl"
      variant="tertiary"
      onClick={handleClick}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      p="0 12px"
      startIcon={<Icon width="32px" />}
    >
      <Text bold color="primary" pl="8px" fontSize="12px">
        {title}
      </Text>
    </StyledButton>
  );
};

export default React.memo(WalletCard);
