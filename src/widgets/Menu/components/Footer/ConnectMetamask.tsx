import React from "react";
import styled from "styled-components";
import { MetamaskIcon } from "../../../../components/Svg";
import Link from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";

interface Props {
  onClick: () => void;
}

const Label = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 4px;
  font-weight: 400;
`;

const AddToMetamaskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${({theme}) => theme.colors.dark500};
  border-radius: 50%;
  box-shadow: none;
  border: 0;
  cursor: pointer;
  transition: opacity .3s ease;
  
  &:hover {
    opacity: 0.65;
  }
`

const ConnectMetamask: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <AddToMetamaskBtn type="button" onClick={() => onClick()} as="button">
      <MetamaskIcon width="22px"/>
    </AddToMetamaskBtn>
  );
};

export default ConnectMetamask;
