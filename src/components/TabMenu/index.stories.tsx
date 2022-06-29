import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import { TabMenu } from "./index";
import { tabVariants } from "./types";

const Row = styled.div<{ isLight?: boolean }>`
  margin-bottom: 32px;
  padding: 24px;
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.white : theme.colors.tooltip};
`;

export default {
  title: "Components/Tab Bar",
  component: TabMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  return (
    <>
      <Row>
        <TabMenu
          disabled
          onItemClick={setIndex}
          activeIndex={index}
          menuTitles={["Select 1", "Select 22", "Select 333", "Select 4444"]}
        />
      </Row>
      <Row>
        <TabMenu
          scale="lg"
          customClass="dark-lg"
          onItemClick={setIndex2}
          activeIndex={index2}
          menuTitles={["Select 1", "Select 2", "Select 3", "Select 4"]}
        />
      </Row>
      <Row>
        <TabMenu
          scale="md"
          customClass="dark-md"
          onItemClick={setIndex2}
          activeIndex={index2}
          menuTitles={["Select 1", "Select 22", "Select 333", "Select 4444"]}
        />
      </Row>
      <Row>
        <TabMenu
          scale="sm"
          customClass="dark-sm"
          onItemClick={setIndex2}
          activeIndex={index2}
          menuTitles={["Select 1", "Select 2", "Select 3", "Select 4"]}
        />
      </Row>
      <Row isLight>
        <TabMenu
          scale="lg"
          customClass="light-lg"
          onItemClick={setIndex2}
          variant={tabVariants.LIGHT}
          activeIndex={index2}
          menuTitles={["Select 1", "Select 2", "Select 3", "Select 4"]}
        />
      </Row>
      <Row isLight>
        <TabMenu
          scale="md"
          customClass="light-md"
          variant={tabVariants.LIGHT}
          onItemClick={setIndex2}
          activeIndex={index2}
          menuTitles={["Select 1", "Select 2", "Select 3", "Select 4"]}
        />
      </Row>
      <Row isLight>
        <TabMenu
          scale="sm"
          customClass="light-sm"
          variant={tabVariants.LIGHT}
          onItemClick={setIndex2}
          activeIndex={index2}
          menuTitles={["Select 1", "Select 2", "Select 3", "Select 4"]}
        />
      </Row>
    </>
  );
};
