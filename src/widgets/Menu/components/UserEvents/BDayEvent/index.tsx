import React, {FC} from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from "../../../../../components/Button";
import {useMatchBreakpoints} from "../../../../../hooks";
import {Login, useWalletModal} from "../../../../WalletModal";
import {PresentIcon} from "../../../icons";


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

const StyledLink = styled.a<{width?: string , flat: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${({ width}) => width || 'auto'};
  
  padding: 0 16px 0 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ flat}) => flat ? 0 : '8px'};
  background: linear-gradient(77.58deg, #2359AA -8.83%, #3A2281 71.19%, #84227E 124.82%);
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    background: linear-gradient(79.91deg, #1263F1 -19.82%, #543FD7 48.01%, #F93B5D 173.07%);
  };
`

const StyledBtn = styled(Button)<ButtonProps>`
  background: linear-gradient(77.58deg, #2359AA -8.83%, #3A2281 71.19%, #84227E 124.82%);
  padding-left: 0;

  &:hover {
    opacity: .8;
  }
  
  ${({theme}) => theme.mediaQueries.sm} {
    background: linear-gradient(79.91deg, #1263F1 -19.82%, #543FD7 48.01%, #F93B5D 173.07%);
  };
  
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
const buttonText = 'B-Day Presents'
  const isAbsoluteUrl = href.startsWith("http");

  const onClickHandler = () => {
    if (account && callback) callback();
    if (!account) onPresentConnectModal();
  }

  return (
    <Wrapper>
      {isAbsoluteUrl ?
        (<StyledLink
          width={isMobile ? '100%' : 'auto'}
          flat={isMobile}
        >
          <PresentIcon width="56px" mr="4px" />
          {buttonText}
        </StyledLink>) :
        (<StyledBtn
          flat={isMobile}
          width={isMobile ? '100%' : 'auto'}
          scale="lg"
          onClick={onClickHandler}
        >
            <PresentIcon width="56px" mr="4px" />
          {buttonText}
        </StyledBtn>
      )}
    </Wrapper>
  )
};

export default BDayEvent;
