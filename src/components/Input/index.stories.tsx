import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import {Meta} from "@storybook/react/types-6-0";
import Search from "../Svg/Icons/Search";
import StarFill from "../Svg/Icons/Star";
import Heading from "../Heading/Heading";
import Input from "./Input";
import InputGroup from "./InputGroup";
import {scales} from "./types";
import Box from "../Box/Box";

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`;
const DarkBg = styled.div`
  background: ${({theme}) => theme.colors.backgroundDark};
  padding: 32px 16px;
`
const LightBg = styled.div`
  padding: 32px 16px;
`

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <LightBg>
        {Object.keys(scales).map((key) => (
          <>
            <Heading mb="16px">{key}</Heading>
            <Row>
              <Input type="text" scale={scales[key]} styleColor='light' value="Value"/>
              <Input type="text" scale={scales[key]} styleColor='light' placeholder="Placeholder..."/>
              <Input type="text" scale={scales[key]} styleColor='light' value="Disabled" disabled/>
              <Input type="text" scale={scales[key]} styleColor='light' value="Success" isSuccess/>
              <Input type="text" scale={scales[key]} styleColor='light' value="Warning" isWarning/>
            </Row>
          </>
        ))}
      </LightBg>

      <DarkBg>
        {Object.keys(scales).map((key) => (
          <>
            <Heading mb="16px" color="white">{key}</Heading>
            <Row>
              <Input type="text" scale={scales[key]} styleColor='dark' value="Value"/>
              <Input type="text" scale={scales[key]} styleColor='dark' placeholder="Placeholder..."/>
              <Input type="text" scale={scales[key]} styleColor='dark' value="Disabled" disabled/>
              <Input type="text" scale={scales[key]} styleColor='dark' value="Success" isSuccess/>
              <Input type="text" scale={scales[key]} styleColor='dark' value="Warning" isWarning/>
            </Row>
          </>
        ))}
      </DarkBg>
    </div>
  );
};

export const Icons: React.FC = () => {
  return (
    <Box width="300px">
      <InputGroup startIcon={<Search width="18px"/>} endIcon={<StarFill width="18px"/>} mb="24px" scale="sm">
        <Input type="text" value="Input Group"/>
      </InputGroup>
      <InputGroup startIcon={<Search width="24px"/>} endIcon={<StarFill width="24px"/>} mb="24px" scale="md">
        <Input type="text" value="Input Group"/>
      </InputGroup>
      <InputGroup startIcon={<Search width="32px"/>} endIcon={<StarFill width="32px"/>} mb="24px" scale="lg">
        <Input type="text" value="Input Group"/>
      </InputGroup>
    </Box>
  );
};
