import React, { FC } from "react";
import { Box } from "../Box";
import styled from "styled-components";
import { DividerLine } from "./index";

export default {
  title: "Components/DividerLine",
  component: DividerLine,
  argTypes: {},
};

const Wrap = styled(Box)`
  padding: 48px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Default: FC = (): JSX.Element => {
  return (
    <Wrap>
      <DividerLine />
    </Wrap>
  );
};
