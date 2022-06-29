import React, { useState } from "react";
import Toggle from "./Toggle";
import styled from "styled-components";

import { Text } from "../Text";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

const WrapperLight = styled.div`
  background: #f9fafd;
  padding: 24px;
`;
const WrapperDark = styled.div`
  background: #07162d;
  padding: 24px;
`;
const Row = styled.div`
  display: flex;
  gap: 0 24px;
  margin-bottom: 32px;
`;

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <WrapperLight>
        <Text mb="12px" bold>
          Default toggle
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            gridArea="test"
            variant="light"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            label="Label LEFT"
            variant="light"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            label="Label RIGHT"
            labelOrientation="right"
            variant="light"
          />
        </Row>
        <Text mb="12px" bold>
          Toggle with custom colors
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            defaultColor="secondary"
            checkedColor="dark800"
            onChange={toggle}
            scale="md"
            variant="light"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale="md"
            label="Label LEFT"
            variant="light"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale="md"
            label="Label RIGHT"
            labelOrientation="right"
            variant="light"
          />
        </Row>
        <Text mb="12px" bold>
          Toggle disabled
        </Text>
        <Row>
          <Toggle checked={isChecked} onChange={toggle} scale="md" disabled />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label LEFT"
            variant="light"
            disabled
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            variant="light"
            disabled
          />
        </Row>

        <Text mb="12px" bold>
          Toggle spaceBetween
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            variant="light"
            spaceBetween
          />
        </Row>
      </WrapperLight>
      <WrapperDark>
        <Text mb="12px" color="white" bold>
          Default toggle
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            variant="dark"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            label="Label LEFT"
            variant="dark"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            label="Label RIGHT"
            labelOrientation="right"
            variant="dark"
          />
        </Row>
        <Text mb="12px" color="white" bold>
          Toggle with custom colors
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            defaultColor="secondary"
            checkedColor="dark800"
            onChange={toggle}
            scale="md"
            variant="dark"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale="md"
            label="Label LEFT"
            variant="dark"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale="md"
            label="Label RIGHT"
            labelOrientation="right"
            variant="dark"
          />
        </Row>
        <Text mb="12px" color="white" bold>
          Toggle disabled
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale="md"
            disabled
            variant="dark"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label LEFT"
            disabled
            variant="dark"
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            disabled
            variant="dark"
          />
        </Row>

        <Text mb="12px" color="white" bold>
          Toggle spaceBetween
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            variant="light"
            spaceBetween
          />
        </Row>
      </WrapperDark>
    </>
  );
};
