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
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

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

      <Row isLight>
        <ButtonMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant="light"
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
          activeIndex={index}
          onItemClick={handleClick}
          variant="light"
        >
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
          variant="warningLight"
          flatBottom
          scale="lg"
        >
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
          variant="dark"
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
          activeIndex={index}
          onItemClick={handleClick}
          variant="dark"
          scale="md"
        >
          <ButtonMenuItem>Button 1 defd</ButtonMenuItem>
          <ButtonMenuItem>Button</ButtonMenuItem>
          <ButtonMenuItem>Button 3uyuihuhu</ButtonMenuItem>
          <ButtonMenuItem>t</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row>
        <ButtonMenu
          scrollX
          activeIndex={index}
          onItemClick={handleClick}
          variant="warningDark"
          scale="lg"
        >
          <ButtonMenuItem as="a">Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row>
        <ButtonMenu
          scrollX
          fullWidth
          activeIndex={index}
          equalElementWidth
          onItemClick={handleClick}
          variant="warningDark"
          scale="lg"
        >
          <ButtonMenuItem as="a">Button</ButtonMenuItem>
          <ButtonMenuItem>ButtonButton</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [index1, setIndex1] = useState<number>(0);
  return (
    <>
      <Row>
        <ButtonMenu activeIndex={0}>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 1
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 2
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 3
          </ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu fullWidth activeIndex={index} onItemClick={setIndex}>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 1
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 2
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 3
          </ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu fullWidth activeIndex={index1} onItemClick={setIndex1}>
          <ButtonMenuItem>Link 1</ButtonMenuItem>
          <ButtonMenuItem>Link 2</ButtonMenuItem>
          <ButtonMenuItem>Link 3</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const FlatBottom: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [index1, setIndex1] = useState<number>(1);

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
        <ButtonMenu flatBottom activeIndex={index1} onItemClick={handleClick1}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          fullWidth
          flatBottom
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

export const FlatTop: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [index1, setIndex1] = useState<number>(1);

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
        <ButtonMenu flatTop activeIndex={index1} onItemClick={handleClick1}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu
          flatTop
          fullWidth
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

export const WithoutBackground: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [index1, setIndex1] = useState<number>(1);

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
      <Row>
        <ButtonMenu
          flatBottom
          withoutBackground
          fullWidth
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
  const [index, setIndex] = useState<number>(0);
  const [index1, setIndex1] = useState<number>(1);

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
  const [index, setIndex] = useState<number>(0);

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
      <ButtonMenu activeIndex={index} fullWidth scale="sm">
        <ButtonMenuItem as="a" href="https://biswap.org/">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://biswap.org/">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://biswap.org/">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Box>
  );
};
