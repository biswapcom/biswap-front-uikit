import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Flex from "../Box/Flex";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
};

const Col = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 64px 32px;
  flex-direction: column;
  width: 360px;
`;

const SliderVariant = ({ initialValue }: { initialValue: number }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <Slider
      value={value}
      onValueChanged={setValue}
      // valueLabel={value === max ? "MAX" : `${percentage}%`}
    />
  );
};

export const Default: React.FC = () => {
  return (
    <Col>
      <SliderVariant initialValue={5} />
    </Col>
  );
};

export const Variants: React.FC = () => {
  return (
    <Col>
      <SliderVariant initialValue={0} />
    </Col>
  );
};
