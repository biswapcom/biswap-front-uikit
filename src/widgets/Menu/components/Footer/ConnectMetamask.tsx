import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  onClick: () => void;
  baseAwsUrl: string;
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

const ConnectMetamask: React.FC<Props> = ({ onClick, baseAwsUrl }) => {
  return (
    <AddToMetamaskBtn type="button" onClick={() => onClick()} as="button">
      <Image
        width={22}
        height={22}
        src={`${baseAwsUrl}/icons/metamask-transparent.svg`}
        alt=""
      />
    </AddToMetamaskBtn>
  );
};

export default ConnectMetamask;
