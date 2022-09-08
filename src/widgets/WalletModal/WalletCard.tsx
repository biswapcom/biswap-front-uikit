import React, { useCallback } from "react";
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
  flex-direction: row;
  justify-content: flex-start;
  white-space: nowrap;
  height: 48px;
  width: 172px;
  background: ${({ theme }) => theme.colors.gray200};
`;

const StyledText = styled(Text)` 
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const handleClick = useCallback(() => {
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
  }, [])

  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      variant="tertiary"
      onClick={handleClick}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="32px" />
      <StyledText pl="8px" fontSize="12px" >{title}</StyledText>
    </StyledButton>
  );
};

export default WalletCard;
