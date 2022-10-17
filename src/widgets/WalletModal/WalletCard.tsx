import React, {ElementType} from "react";
import { isDesktop, isMobile } from "react-device-detect";
import styled from "styled-components";

// components
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { Link } from "../../components/Link";

// utils
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, WalletConfig } from "./types";

// props
interface Props<T> {
  walletConfig: WalletConfig<T>;
  login: Login<T>;
  onDismiss: () => void;
}

// ui
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

const WalletCard: React.FC<React.PropsWithChildren<Props<any>>> = ({
  login,
  walletConfig,
  onDismiss,
}) => {
  const { title, icon: Icon, installed, downloadLink } = walletConfig;

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
     style:
          {
        textDecoration: "none",
        display: 'flex',
        alignItems: 'center',
        padding:'0 24px',
        borderRadius: '8px'
      },
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  if (
    typeof window !== "undefined" &&
    // @ts-ignore
    !window.ethereum &&
    walletConfig.href &&
    isMobile
  ) {
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
      scale="xl"
      variant="tertiary"
      id={`wallet-connect-${title.toLowerCase()}`}
      {...linkAction}
    >
      <Icon width="24px"  />
      <Text ml='8px' bold color="primary" fontSize="12px">
        {title}
      </Text>
    </StyledButton>
  );
};

export default WalletCard;
