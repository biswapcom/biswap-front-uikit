import React from "react";
import styled from "styled-components";
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
  background: ${({ theme }) => theme.colors.white};
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
            <Heading mb="16px" color="backgroundDark">{key} light</Heading>
            <Row>
              <Input type="text" scale={scales[key]} variant='transparent' value="Value"/>
              <Input type="text" scale={scales[key]} variant='light' placeholder="Placeholder..."/>
              <Input type="text" scale={scales[key]} variant='light' value="Disabled" disabled/>
              <Input type="text" scale={scales[key]} variant='light' value="Success" isSuccess/>
              <Input type="text" scale={scales[key]} variant='light' value="Warning" isWarning/>
            </Row>
          </>
        ))}
      </LightBg>

      <DarkBg>
        {Object.keys(scales).map((key) => (
          <>
            <Heading mb="16px" color="white">{key} dark</Heading>
            <Row>
              <Input type="text" scale={scales[key]} variant='dark' value="Value"/>
              <Input type="text" scale={scales[key]} variant='dark' placeholder="Placeholder..."/>
              <Input type="text" scale={scales[key]} variant='dark' value="Disabled" disabled/>
              <Input type="text" scale={scales[key]} variant='dark' value="Success" isSuccess/>
              <Input type="text" scale={scales[key]} variant='dark' value="Warning" isWarning/>
            </Row>
          </>
        ))}
      </DarkBg>
    </div>
  );
};

export const Icons: React.FC = () => {
  return (
    <>
      <Box width="300px" py="24px" px="24px" background="white">
        <InputGroup
          startIcon={<Search width="16px" color="gray900"/>}
          endIcon={<StarFill width="16px" color="gray900"/>}
          mb="24px"
          variant='light'
          scale="sm"
        >
          <Input type="text"/>
        </InputGroup>
        <InputGroup
          startIcon={<Search width="20px" color="gray900"/>}
          endIcon={<StarFill width="20px" color="gray900"/>}
          mb="24px"
          variant='light'
          scale="md">
          <Input type="text" placeholder="Input Group"/>
        </InputGroup>
        <InputGroup
          startIcon={<Search width="24px" color="gray900"/>}
          endIcon={<StarFill width="24px" color="gray900"/>}
          mb="24px"
          variant='light'
          scale="lg">
          <Input type="text" value="Input Group"/>
        </InputGroup>
      </Box>
      <Box width="300px" py="24px" px="24px" background="#07162D">
        <InputGroup
          startIcon={<Search width="16px" color="pastelBlue"/>}
          endIcon={<StarFill width="16px" color="pastelBlue"/>}
          mb="24px"
          variant='dark'
          scale="sm"
        >
          <Input type="text"/>
        </InputGroup>
        <InputGroup
          startIcon={<Search width="20px" color="pastelBlue"/>}
          endIcon={<StarFill width="20px" color="pastelBlue"/>}
          mb="24px"
          variant='dark'
          scale="md">
          <Input type="text" placeholder="Input Group"/>
        </InputGroup>
        <InputGroup
          startIcon={<Search width="24px" color="pastelBlue"/>}
          endIcon={<StarFill width="24px" color="pastelBlue"/>}
          mb="24px"
          variant='dark'
          scale="lg">
          <Input type="text" value="Input Group"/>
        </InputGroup>
      </Box>
    </>
  );
};
