import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import {SlideButtonMenu} from "./index";

const Row = styled.div<{isLight?: boolean}>`
  margin-bottom: 32px;
  padding: 8px;
  background-color: ${({ theme, isLight }) => isLight ? theme.colors.white : 'transparent'};
`;

export default {
  title: "Components/Slide Button Menu",
  component: SlideButtonMenu,
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
        <SlideButtonMenu
            disabled
            onItemClick={handleClick}
            activeIndex={index}
            menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
        />
      </Row>
      <Row>
        <SlideButtonMenu
            customClass='dark-lg'
            scale='lg'
            onItemClick={handleClick2}
            activeIndex={index2}
            menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
        />
      </Row>
      <Row isLight>
        <SlideButtonMenu
            variant='selectLight'
            onItemClick={handleClick}
            activeIndex={index}
            menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
        />
      </Row>
      <Row isLight>
        <SlideButtonMenu
            customClass='light-lg'
            variant='selectLight'
            scale='lg'
            onItemClick={handleClick2}
            activeIndex={index2}
            menuTitles={['Select 1', 'Select 22', 'Select 333', 'Select 4444']}
        />
      </Row>
    </>
  );
};
