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

  &:hover > div {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      scale="xl"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId, walletConfig.instanceCheckRule);
        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        window.localStorage.setItem(
          connectorLocalStorageKey,
          walletConfig.connectorId
        );
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      p="0 12px"
      startIcon={<Icon width="24px" />}
    >
      <Text bold color="primary" fontSize="12px">
        {title}
      </Text>
    </StyledButton>
  );
};

export default React.memo(WalletCard);
