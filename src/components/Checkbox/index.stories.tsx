import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import {Text} from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const WrapperLight = styled.div`
  background: #F9FAFD;
  padding: 24px 32px;
  height: 200px;
`
const WrapperDark = styled.div`
  background: #07162D;
  padding: 24px 32px;
  height: 200px;
`

export const Default: React.FC = () => {
  return (
    <>
      <WrapperLight>
        <div>
          <Checkbox labelOrientation="left" colorVariant="light" label="On left label"/>
          <Checkbox labelOrientation="right" colorVariant="light" label="On right label"/>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Checkbox scale="sm" labelOrientation="left" colorVariant="light" label="On left label"/>
          <Checkbox scale="sm" labelOrientation="right" colorVariant="light" label="On right label"/>
        </div>
        <div>
          <Checkbox/>
        </div>
        <div>
          <Checkbox scale="sm"/>
        </div>
      </WrapperLight>

      <WrapperDark>
        <div>
          <Checkbox labelOrientation="left" colorVariant="dark" label="On left label"/>
          <Checkbox labelOrientation="right" colorVariant="dark" label="On right label"/>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Checkbox scale="sm" labelOrientation="left" colorVariant="dark" label="On left label"/>
          <Checkbox scale="sm" labelOrientation="right" colorVariant="dark" label="On right label"/>
        </div>
        <div>
          <Checkbox/>
        </div>
        <div>
          <Checkbox scale="sm"/>
        </div>
      </WrapperDark>
    </>
  );
};
