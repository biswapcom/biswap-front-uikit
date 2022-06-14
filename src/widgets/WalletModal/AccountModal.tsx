import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { useWalletModal } from "./index";
import { Link } from "../../components/Link";
import { ArrowOpenNew } from "../../components/Svg";

interface Props {
  account: string;
  logout: () => void;
  login: any;
  onDismiss?: () => void;
  recentTransaction?: any;
  rowStatus?: any;
  chainId?: any;
  clearTransaction?: any;
  isSwap?: any;
  transactionsForUIKit?: any;
}

const ConnectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionWrapper = styled.div`
  margin-top: 24px;
  border-radius: 16px;
  padding: 24px;
  background-color: #f2f6fc;
`;

const AccountModal: React.FC<Props> = ({
  transactionsForUIKit,
  isSwap,
  account,
  logout,
  onDismiss = () => null,
  login,
  recentTransaction,
  chainId,
  clearTransaction,
}) => {
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account,
    recentTransaction,
    chainId
  );

  const changeWalletHandler = async () => {
    await onDismiss();
    await logout();
    onPresentConnectModal();
  };

  const ClearAndDismiss = () => {
    clearTransaction();
    onDismiss();
  };

  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <ConnectedWrapper>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="21px"
          color="#1DC872"
        >
          Connected
        </Text>
        <Button onClick={changeWalletHandler} scale="lg" variant="primary">
          Change
        </Button>
      </ConnectedWrapper>
      <Text
        fontSize="14px"
        fontWeight="600"
        color="#07162D"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBottom: "8px",
          marginTop: "16px",
        }}
      >
        {account}
      </Text>
      <Flex>
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
        <Link
          fontWeight="400"
          scale="xs"
          ml="26px"
          small
          href={`https://bscscan.com/address/${account}`}
          mr="16px"
        >
          View on BscScan
          <ArrowOpenNew color="primary" width="14px" ml="4px" />
        </Link>
      </Flex>
      {isSwap && (
        <TransactionWrapper>
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              fontSize="14px"
              fontWeight="600"
              lineHeight="21px"
              color="#07162D"
            >
              Recent transactions
            </Text>
            <Button
              m={0}
              p={0}
              scale="sm"
              variant="text"
              onClick={ClearAndDismiss}
            >
              Clear All
            </Button>
          </Flex>
          <>{transactionsForUIKit()}</>
        </TransactionWrapper>
      )}
      <Flex>
        <Button
          width="100%"
          scale="xl"
          mt="24px"
          variant="tertiaryOut"
          onClick={() => {
            logout();
            onDismiss();
          }}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  );
};

export default AccountModal;
