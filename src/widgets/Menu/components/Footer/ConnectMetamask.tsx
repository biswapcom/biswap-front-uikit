import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

const AddToMetamaskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.dark500};
  border-radius: 50%;
  box-shadow: none;
  border: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }
`;

const MetamaskIcon = styled.img.attrs({
  src: "https://static.biswap.org/bs/icons/metamask-transparent.svg",
})`
  width: 22px;
`;

const ConnectMetamask: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <AddToMetamaskBtn type="button" onClick={() => onClick()} as="button">
      <MetamaskIcon />
    </AddToMetamaskBtn>
  );
};

export default ConnectMetamask;
