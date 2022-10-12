import React, { FC } from "react";
import styled from "styled-components";

import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {},
};

const Wrapper = styled.div`
  padding: 32px 24px;
`
const WrapperLight = styled(Wrapper)`
  background: ${({ theme }) => theme.colors.white};
`
const WrapperDark = styled(Wrapper)`
  background: ${({ theme }) => theme.colors.backgroundDark};
`

export const Default: React.FC = () => {
  return (
    <>
      <WrapperDark>
        <Pagination variant="dark" pageCount={9}/>
      </WrapperDark>
      <WrapperLight>
        <Pagination variant="light" pageCount={9}/>
      </WrapperLight>
    </>
  )
}