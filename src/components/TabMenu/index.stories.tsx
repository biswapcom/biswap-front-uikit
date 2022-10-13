import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import { TabMenu, TabMenuItem } from "./index";

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
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <TabMenu disabled activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Dark sm 1</TabMenuItem>
          <TabMenuItem>Dark sm 2</TabMenuItem>
          <TabMenuItem>Dark sm 3</TabMenuItem>
          <TabMenuItem>Dark sm 4</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          disabled
          variant="light"
          activeIndex={index}
          onItemClick={handleClick}
        >
          <TabMenuItem>Dark sm 1</TabMenuItem>
          <TabMenuItem>Dark sm 2</TabMenuItem>
          <TabMenuItem>Dark sm 3</TabMenuItem>
          <TabMenuItem>Dark sm 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row isLight>
        <TabMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant="light"
          scale="sm"
        >
          <TabMenuItem>Light sm 1</TabMenuItem>
          <TabMenuItem>Light sm 2</TabMenuItem>
          <TabMenuItem>Light sm 3</TabMenuItem>
          <TabMenuItem>Light sm 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row isLight>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant="light">
          <TabMenuItem>Light md 1</TabMenuItem>
          <TabMenuItem>Light md 2</TabMenuItem>
          <TabMenuItem>Light md 3</TabMenuItem>
          <TabMenuItem>Light md 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row isLight>
        <TabMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant="light"
          scale="lg"
        >
          <TabMenuItem>Light lg 1</TabMenuItem>
          <TabMenuItem>Light lg 2</TabMenuItem>
          <TabMenuItem>Light lg 3</TabMenuItem>
          <TabMenuItem>Light lg 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row>
        <TabMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant="dark"
          scale="sm"
        >
          <TabMenuItem>Dark sm 1</TabMenuItem>
          <TabMenuItem>Dark sm 2</TabMenuItem>
          <TabMenuItem>Dark sm 3</TabMenuItem>
          <TabMenuItem>Dark sm 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant="dark">
          <TabMenuItem>Dark md 1</TabMenuItem>
          <TabMenuItem>Dark md 2</TabMenuItem>
          <TabMenuItem>Dark md 3</TabMenuItem>
          <TabMenuItem>Dark md 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row>
        <TabMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant="dark"
          scale="lg"
        >
          <TabMenuItem>Dark lg 1</TabMenuItem>
          <TabMenuItem>Dark lg 2</TabMenuItem>
          <TabMenuItem>Dark lg 3</TabMenuItem>
          <TabMenuItem>Dark lg 4</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <Row>
        <TabMenu activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap 1
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link 2
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Example 3
          </TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu variant="light" activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap 1
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link 2
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Example 3
          </TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};

export const DisabledMenu: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  return (
    <>
      <Row>
        <TabMenu disabled activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Dark</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          disabled
          variant="light"
          activeIndex={index}
          onItemClick={handleClick}
        >
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Light</TabMenuItem>
          <TabMenuItem>Full</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu
          disabled
          fullWidth
          activeIndex={index}
          onItemClick={handleClick}
        >
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Light</TabMenuItem>
          <TabMenuItem>Full</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          disabled
          fullWidth
          variant="light"
          activeIndex={index}
          onItemClick={handleClick}
        >
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Light</TabMenuItem>
          <TabMenuItem>Full</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};

export const FullWidthMenu: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <TabMenu
          scrollX
          fullWidth
          activeIndex={index}
          equalElementWidth
          onItemClick={handleClick}
          variant="dark"
          scale="lg"
        >
          <TabMenuItem as="a">Warning Dark</TabMenuItem>
          <TabMenuItem>Full width</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          scrollX
          fullWidth
          activeIndex={index}
          equalElementWidth
          onItemClick={handleClick}
          variant="light"
          scale="lg"
        >
          <TabMenuItem as="a">Warning Dark</TabMenuItem>
          <TabMenuItem>Full width</TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu fullWidth activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Full Width
          </TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          variant="light"
          fullWidth
          activeIndex={index}
          onItemClick={setIndex}
        >
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Full Width
          </TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu
          disabled
          fullWidth
          activeIndex={index}
          onItemClick={handleClick}
        >
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Dark</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          variant="light"
          disabled
          fullWidth
          activeIndex={index}
          onItemClick={handleClick}
        >
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Dark</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};
