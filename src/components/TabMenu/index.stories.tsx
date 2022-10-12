import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import { TabMenu, TabMenuItem } from "./index";
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
        <TabMenu scale="lg" onItemClick={setIndex} activeIndex={index}>
          <TabMenuItem iconName="VerifiedOpacity" iconColor="success">
            Button 1
          </TabMenuItem>
          <TabMenuItem>But</TabMenuItem>
          <TabMenuItem>Button 3</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          variant="light"
          scale="lg"
          onItemClick={setIndex}
          activeIndex={index}
        >
          <TabMenuItem iconColor="success">Button 1</TabMenuItem>
          <TabMenuItem>But</TabMenuItem>
          <TabMenuItem>Button 3</TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu scale="md" onItemClick={setIndex} activeIndex={index}>
          <TabMenuItem iconName="VerifiedOpacity" iconColor="success">
            Button 1
          </TabMenuItem>
          <TabMenuItem>But</TabMenuItem>
          <TabMenuItem>Button 3</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          variant="light"
          scale="md"
          onItemClick={setIndex}
          activeIndex={index}
        >
          <TabMenuItem iconName="VerifiedOpacity" iconColor="success">
            Button 1
          </TabMenuItem>
          <TabMenuItem>But</TabMenuItem>
          <TabMenuItem>Button 3</TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu scale="sm" onItemClick={setIndex} activeIndex={index}>
          <TabMenuItem iconName="VerifiedOpacity" iconColor="success">
            Button 1
          </TabMenuItem>
          <TabMenuItem>But</TabMenuItem>
          <TabMenuItem>Button 3</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          variant="light"
          scale="sm"
          onItemClick={setIndex}
          activeIndex={index}
        >
          <TabMenuItem iconName="VerifiedOpacity" iconColor="success">
            Button 1
          </TabMenuItem>
          <TabMenuItem>But</TabMenuItem>
          <TabMenuItem>Button 3</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};
