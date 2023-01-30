import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import TableCardSkeleton from "./TableCardSkeleton";
import { ViewMode } from "./types";
import { Box, Grid } from "../Box";

// hooks
import { useMatchBreakpoints } from "../../contexts";

export default {
  title: "Components/TableCardSkeleton",
  component: TableCardSkeleton,
  argTypes: {},
} as Meta;

export const Table: React.FC = () => {
  return (
    <Box maxWidth="1120px" p="48px">
      <TableCardSkeleton viewMode="table" />
    </Box>
  );
};

export const Card: React.FC = () => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <Grid
      maxWidth="1120px"
      p="48px"
      mb="56px"
      gridGap="24px"
      gridTemplateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
    >
      <TableCardSkeleton />
    </Grid>
  );
};
