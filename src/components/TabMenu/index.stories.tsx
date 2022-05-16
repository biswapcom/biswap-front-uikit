import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import {TabMenu} from "./index";
import {tabVariants} from "./types";

const Row = styled.div<{isLight?: boolean}>`
  margin-bottom: 32px;
  padding: 8px;
  background-color: ${({ theme, isLight }) => isLight ? theme.colors.white : theme.colors.tooltip};
`;

export default {
  title: "Components/Tab Bar",
  component: TabMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick2 = (newIndex) => setIndex2(newIndex);

  return (
    <>
        <Row>
            <TabMenu
                onItemClick={handleClick}
                activeIndex={index}
                menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
            />
        </Row>
        <Row>
            <TabMenu
                scale='lg'
                customClass='dark-lg'
                onItemClick={handleClick2}
                activeIndex={index2}
                menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
            />
        </Row>
      <Row isLight>
        <TabMenu
          onItemClick={handleClick}
          variant={tabVariants.TAB_LIGHT}
          activeIndex={index}
          menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
        />
      </Row>
      <Row isLight>
        <TabMenu
            scale='lg'
            customClass='light-lg'
          variant={tabVariants.TAB_LIGHT}
          onItemClick={handleClick2}
          activeIndex={index2}
          menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
        />
      </Row>
    </>
  );
};
