import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import ButtonMenu from "./ButtonMenu";
import ButtonMenuItem from "./ButtonMenuItem";
import { Box } from "../Box";

const Row = styled.div<{ isLight?: boolean }>`
  margin-bottom: 32px;
  padding: 8px;
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.white : "transparent"};
`;

export default {
  title: "Components/Button Menu",
  component: ButtonMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  const handleClick1 = (newIndex: number) => setIndex1(newIndex);

  return (
    <>
      <Row>
        <ButtonMenu
          disabled
          scale="sm"
          activeIndex={index}
          onItemClick={handleClick}
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row isLight>
        <ButtonMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant="selectLight"
          scale="sm"
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu
          activeIndex={index1}
          onItemClick={handleClick1}
          variant="selectLight"
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  return (
    <Row>
      <ButtonMenu activeIndex={0}>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Row>
  );
};

export const FlatBottom: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  const handleClick1 = (newIndex: number) => setIndex1(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          flatBottom
          activeIndex={index1}
          onItemClick={handleClick1}
          variant="warning"
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const FlatTop: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  const handleClick1 = (newIndex: number) => setIndex1(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          flatTop
          activeIndex={index1}
          onItemClick={handleClick1}
          variant="success"
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const WithoutBackground: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  const handleClick1 = (newIndex: number) => setIndex1(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          withoutBackground
          activeIndex={index1}
          onItemClick={handleClick1}
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          flatBottom
          withoutBackground
          activeIndex={index1}
          onItemClick={handleClick1}
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const DisabledMenu: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  const handleClick1 = (newIndex: number) => setIndex1(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled activeIndex={index1} onItemClick={handleClick1}>
          <ButtonMenuItem>Disabled 1</ButtonMenuItem>
          <ButtonMenuItem>Disabled 2</ButtonMenuItem>
          <ButtonMenuItem>Disabled 3</ButtonMenuItem>
          <ButtonMenuItem>Disabled 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          activeIndex={index1}
          onItemClick={handleClick1}
          scale="sm"
          variant="text"
          ml="24px"
        >
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          disabled
          activeIndex={index1}
          onItemClick={handleClick1}
          scale="sm"
          variant="text"
          ml="24px"
        >
          <ButtonMenuItem>Disabled 1</ButtonMenuItem>
          <ButtonMenuItem>Disabled 2</ButtonMenuItem>
          <ButtonMenuItem>Disabled 3</ButtonMenuItem>
          <ButtonMenuItem>Disabled 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const FullWidthMenu: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <Box width="840px">
      <ButtonMenu
        activeIndex={index}
        onItemClick={handleClick}
        fullWidth
        mb="24px"
      >
        <ButtonMenuItem>Button 1</ButtonMenuItem>
        <ButtonMenuItem>Button 2</ButtonMenuItem>
        <ButtonMenuItem>Button 3</ButtonMenuItem>
        <ButtonMenuItem>Button 4</ButtonMenuItem>
      </ButtonMenu>
      <ButtonMenu activeIndex={index} fullWidth scale="sm" variant="text">
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Box>
  );
};
