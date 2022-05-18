import React, {FC} from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from "../../../../../components/Button";
import {useMatchBreakpoints} from "../../../../../hooks";
import {Login, useWalletModal} from "../../../../WalletModal";
import Wallet from "../../../icons/Wallet";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  callback?: () => void;
  isSwap?: boolean,
  href?: string
}

const Wrapper = styled.div`
  margin-right: 0;

  ${({theme}) => theme.mediaQueries.sm} {
    margin-right: 10px;
  }
`
const StyledBtn = styled(Button)<ButtonProps>`
  background: linear-gradient(79.91deg, #1263F1 -19.82%, #543FD7 48.01%, #F93B5D 173.07%);
`
const BDayEvent: FC<Props> = ({
  login,
  logout,
  account,
  callback,
  isSwap= false,
  href= '/',
}) => {
  const {isMobile} = useMatchBreakpoints()
  const { onPresentConnectModal } = useWalletModal(login, logout);

  const isAbsoluteUrl = href.startsWith("http");

  const onClickHandler = () => {
    if (account && callback) callback();
    if (!account) onPresentConnectModal();
  }

  return (
    <Wrapper>
      {!isAbsoluteUrl ?
        (<StyledBtn
          as="a"
          href={href}
          flat={isMobile}
          width={isMobile ? '100%' : 'auto'}
          scale="lg"
        >
          B-Day Presents
        </StyledBtn>) :
        (<StyledBtn
          flat={isMobile}
          width={isMobile ? '100%' : 'auto'}
          scale="lg"
          onClick={onClickHandler}
        >B-Day Presents
        </StyledBtn>
      )}
    </Wrapper>
  )
};

export default BDayEvent;
