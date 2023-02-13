import React from "react";
import { Meta } from "@storybook/react/types-6-0";

// components
import Faqs from "./Faqs";
import { Heading } from "../Heading";
import { Box } from "../Box";

// config
import { Config } from "./config";


export default {
  title: "Components/Faqs",
  component: Faqs,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const { title, leftData, rightData } = Config

  return (
    <Box p="20px">
      <Heading mb="20px">Faqs</Heading>
      <Faqs title={title} leftData={leftData} rightData={rightData} />
    </Box>
  );
};
