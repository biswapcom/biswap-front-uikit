import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import {
  WalletOpacityIcon,
  RefreshSolidIcon,
} from "../../../../components/Svg";
import { useWalletModal } from "../../../WalletModal";
import { Login } from "../../../WalletModal";
import { useMatchBreakpoints } from "../../../../hooks";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  pendingTransactions?: number;
  recentTransaction: any;
  chainId: any;
  clearTransaction: any;
  isSwap?: boolean;
  transactionsForUIKit?: any;
}

const WalletWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

// const CurrencyValue = styled.div`
//   padding: 0 16px;
// `;

const UserBlock: React.FC<Props> = ({
  account,
  login,
  logout,
  pendingTransactions,
  recentTransaction,
  chainId,
  clearTransaction,
  isSwap,
  transactionsForUIKit,
}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account,
    recentTransaction,
    chainId,
    clearTransaction,
    isSwap,
    transactionsForUIKit
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  const iconProps = {
    width: "24px",
    color: "white",
    style: { cursor: "pointer" },
  };
  const { isSm, isXs } = useMatchBreakpoints();
  return (
    <div>
      {account ? (
        <WalletWrap>
          {/* <CurrencyValue> */}
          {/*  <Text fontSize="14px" color="text"> */}
          {/*    12.34 BNB */}
          {/*  </Text> */}
          {/* </CurrencyValue> */}
          <Button
            variant={pendingTransactions ? "success" : "primary"}
            scale={isSm || isXs ? "md" : "lg"}
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {pendingTransactions ? (
              <>
                {pendingTransactions} pending <RefreshSolidIcon color="white" />
              </>
            ) : (
              <>
                {!isSm && !isXs && (
                  <WalletOpacityIcon {...iconProps} mr="8px" />
                )}
                {accountEllipsis}
              </>
            )}
          </Button>
        </WalletWrap>
      ) : (
        <Button
          scale={isSm || isXs ? "md" : "lg"}
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {!isSm && !isXs && <WalletOpacityIcon {...iconProps} mr="8px" />}
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
