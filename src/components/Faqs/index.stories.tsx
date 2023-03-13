import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// components
import Faqs from "./Faqs";
import { Heading } from "../Heading";
import { Box, Grid } from "../Box";

// config
import { Config } from "./config";

const GridWrapper = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  height: 100%;
  min-height: calc(100vh - 288px);

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 256px;
    grid-gap: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-gap: 32px;
  }
`;
const Stub = styled.div`
  width: 100%;
  background: rgba(212, 122, 31, 0.94);
  height: 300px;
`;

export default {
  title: "Components/Faqs",
  component: Faqs,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const { title, leftData, rightData } = Config;

  return (
    <Box p="20px">
      <Heading mb="20px">Faqs</Heading>
      <Faqs title={title} leftData={leftData} rightData={rightData} />
    </Box>
  );
};

export const DefaultBlog: React.FC = () => {
  const { title, leftData, rightData } = Config;
  return (
    <Box p="20px">
      <Heading mb="20px">Faqs</Heading>
      <GridWrapper>
        <Box>
          <Faqs
            title={title}
            leftData={leftData}
            rightData={rightData}
            blogFAQ
          />
        </Box>
        <Box>
          <Stub />
        </Box>
      </GridWrapper>
    </Box>
  );
};
