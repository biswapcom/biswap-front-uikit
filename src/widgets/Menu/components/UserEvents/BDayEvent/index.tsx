import React, {FC} from 'react';
import styled from 'styled-components';
import {Button} from "../../../../../components/Button";
import {useMatchBreakpoints} from "../../../../../hooks";
import {useWalletModal} from "../../../../WalletModal";
import Wallet from "../../../icons/Wallet";

const Wrapper = styled.div`
  margin-right: 0;

  ${({theme}) => theme.mediaQueries.sm} {
    margin-right: 10px;
  }
`
const StyledBtn = styled(Button)`
  background: linear-gradient(79.91deg, #1263F1 -19.82%, #543FD7 48.01%, #F93B5D 173.07%);
`
const BDayEvent: FC<any> = ({
  login,
  logout,
  account,
  callback
}) => {
  const {isMobile} = useMatchBreakpoints()

  const { onPresentConnectModal } = useWalletModal(login, logout);
  const iconProps = { width: "24px", color: "white", style: { cursor: "pointer" } };

  return (
    <Wrapper>
      {account ?
      (<StyledBtn flat={isMobile} width={isMobile && '100%'} scale="md" onClick={callback}>B-Day Presents</StyledBtn>) :
       ( <Button
          scale={isMobile ? 'xs' : 'md'}
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {!isMobile && (
            <Wallet {...iconProps} mr="8px" />
          )}
          Connect wallet
        </Button>
       )}
    </Wrapper>
  )
};

export default BDayEvent;
