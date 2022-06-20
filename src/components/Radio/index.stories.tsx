import React, { useState } from "react";
import Radio from "./Radio";
import styled from "styled-components";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {},
};

const WrapperLight = styled.div`
  background: #f9fafd;
  padding: 24px;
`;
const WrapperDark = styled.div`
  background: #07162d;
  padding: 24px;
`;

const RadioWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const Default: React.FC = () => {
  const [radio, setRadio] = useState("one");
  const [radioSm, setRadioSm] = useState("one");

  const handleChange = (evt: { target: { value: any; }; }) => {
    // eslint-disable-next-line
    console.info("fired");
    const { value } = evt.target;
    setRadio(value);
  };

  const handleChangeSm = (evt: { target: { value: any; }; }) => {
    const { value } = evt.target;
    setRadioSm(value);
  };

  return (
    <>
      <WrapperLight>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale="md"
            radioName="one"
            label="Radio 1 MD"
            colorVariant="light"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale="md"
            radioName="one"
            label="Radio 2 MD"
            colorVariant="light"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale="sm"
            radioName="one"
            label="Radio 1 SM"
            colorVariant="light"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale="sm"
            radioName="one"
            label="Radio 2 SM"
            colorVariant="light"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale="md"
            radioName="one"
            labelOrientation="right"
            label="Radio 1 MD"
            colorVariant="light"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale="md"
            radioName="one"
            labelOrientation="right"
            label="Radio 2 MD"
            colorVariant="light"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale="sm"
            radioName="one"
            label="Radio 1 SM"
            labelOrientation="right"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale="sm"
            radioName="one"
            label="Radio 2 SM"
            labelOrientation="right"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale="md"
            radioName="one"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale="md"
            radioName="one"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale="sm"
            radioName="one"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale="sm"
            radioName="one"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
      </WrapperLight>
      <WrapperDark>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale="md"
            radioName="one"
            label="Radio 1 MD"
            colorVariant="dark"
            onChange={handleChange}
          />
          <Radio
            scale="md"
            radioName="one"
            label="Radio 2 MD"
            colorVariant="dark"
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale="sm"
            radioName="two"
            label="Radio 1 SM"
            colorVariant="dark"
            onChange={handleChange}
          />
          <Radio
            scale="sm"
            radioName="two"
            label="Radio 2 SM"
            colorVariant="dark"
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale="md"
            radioName="three"
            labelOrientation="right"
            label="Radio 1 MD"
            colorVariant="dark"
            onChange={handleChange}
          />
          <Radio
            scale="md"
            radioName="three"
            labelOrientation="right"
            label="Radio 2 MD"
            colorVariant="dark"
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale="sm"
            radioName="one"
            label="Radio 1 SM"
            labelOrientation="right"
            colorVariant="dark"
            onChange={handleChange}
          />
          <Radio
            scale="sm"
            radioName="one"
            label="Radio 2 SM"
            labelOrientation="right"
            colorVariant="dark"
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio scale="md" radioName="one" onChange={handleChange} />
          <Radio scale="md" radioName="one" onChange={handleChange} />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio scale="sm" radioName="one" onChange={handleChange} />
          <Radio scale="sm" radioName="one" onChange={handleChange} />
        </RadioWrap>
      </WrapperDark>
    </>
  );
};
