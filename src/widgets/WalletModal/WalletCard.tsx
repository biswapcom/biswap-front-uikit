import React from "react";
import styled from "styled-components";

// components
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { Link } from "../../components/Link";

// utils
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import {Login, WalletConfig} from "./types";

// hooks
import {useMatchBreakpoints} from "../../contexts";

// props
interface Props<T> {
  walletConfig: WalletConfig<T>;
  login: Login<T>;
  onDismiss: () => void;
}

// ui
const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 0 0;
  white-space: nowrap;
  min-height: 91px;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const WalletCard: React.FC<React.PropsWithChildren<Props<any>>> = ({ login, walletConfig, onDismiss }) => {

  const { title, icon: Icon, installed, downloadLink } = walletConfig;

    const { isMobile, isDesktop } = useMatchBreakpoints();

    let linkAction: any = {
        onClick: () => {
            login(walletConfig.connectorId);
            localStorage?.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage?.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        },
    };

    if (installed === false && isDesktop && downloadLink?.desktop) {
        linkAction = {
            as: Link,
            href: downloadLink.desktop,
            style: {
                textDecoration: "none",
            },
            target: "_blank",
            rel: "noopener noreferrer",
        };
    }
    // @ts-ignore
    if (typeof window !== "undefined" && !window.ethereum && walletConfig.href && isMobile) {
        linkAction = {
            style: {
                textDecoration: "none",
            },
            as: Link,
            href: walletConfig.href,
            target: "_blank",
            rel: "noopener noreferrer",
        };
    }

  return (
    <StyledButton
      variant="tertiary"
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      {...linkAction}
    >
      <Icon width="32px" />
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default WalletCard;
