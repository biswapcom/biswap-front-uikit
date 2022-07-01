import React, { FC } from "react";
import Divider from "./index";
import { Box } from "../Box";
import styled from "styled-components";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {},
};

const Wrap = styled(Box)`
  padding: 48px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Default: FC = (): JSX.Element => {
  return (
    <Wrap>
      <Divider />
    </Wrap>
  );
};
