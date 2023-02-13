import React from "react";
import { Meta } from "@storybook/react/types-6-0";

// components
import { Heading } from "../Heading";
import { Box } from "../Box";
import Terms from "./Terms";

// config
import { Config } from "./config";

export default {
  title: "Components/Terms",
  component: Terms,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const { revised, description, termsList } = Config;

  return (
    <Box p="20px" background="#071C3C" minHeight="100vh">
      <Heading mb="20px">Terms</Heading>
      <Terms
        revised={revised}
        description={description}
        termsList={termsList}
      />
    </Box>
  );
};
