import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { scales } from "./types";
import Box from "../Box/Box";

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`;
const DarkBg = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: 32px 16px;
`;
const LightBg = styled.div`
  padding: 32px 16px;
  background: ${({ theme }) => theme.colors.white};
`;

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <LightBg>
        <Heading mb="16px" color="backgroundDark">
          Transparent input
        </Heading>
        <Row>
          <Input
            type="text"
            scale="lg"
            variant="transparent"
            placeholder="Transparent input"
          />
        </Row>
        {Object.values(scales).map((scale) => (
          <>
            <Heading mb="16px" color="backgroundDark">
              {scale} light
            </Heading>
            <Row>
              <Input
                type="text"
                scale={scale}
                variant="light"
                value="Value"
              />
              <Input
                type="text"
                scale={scale}
                variant="light"
                placeholder="Placeholder..."
              />
              <Input
                type="text"
                scale={scale}
                variant="light"
                value="Disabled"
                disabled
              />
              <Input
                type="text"
                scale={scale}
                variant="lightError"
                value="Error"
              />
              <Input
                type="text"
                scale={scale}
                variant="lightWarning"
                value="Warning"
              />
            </Row>
          </>
        ))}
      </LightBg>

      <DarkBg>
        {Object.values(scales).map((scale) => (
          <>
            <Heading mb="16px" color="white">
              {scale} dark
            </Heading>
            <Row>
              <Input
                type="text"
                scale={scale}
                variant="dark"
                value="Value"
              />
              <Input
                type="text"
                scale={scale}
                variant="dark"
                placeholder="Placeholder..."
              />
              <Input
                type="text"
                scale={scale}
                variant="dark"
                value="Disabled"
                disabled
              />
              <Input
                type="text"
                scale={scale}
                variant="darkError"
                value="Error"
              />
              <Input
                type="text"
                scale={scale}
                variant="darkWarning"
                value="Warning"
              />
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
      <LightBg>
        <Box width="350px" py="24px" px="24px">
          <InputGroup mb="24px" variant="light" scale="lg">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            variant="light"
            scale="md"
          >
            <Input type="text" placeholder="Input Group" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="light"
            scale="sm"
          >
            <Input type="text" value="Input Group" />
          </InputGroup>

          <InputGroup
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="light"
            scale="md"
          >
            <Input type="text" value="Input Group isError" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="lightWarning"
            scale="md"
            isWarning
          >
            <Input type="text" value="Input Group isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="lightError"
            scale="md"
            isError
          >
            <Input type="text" value="Input Group isWarning" />
          </InputGroup>
        </Box>
      </LightBg>
      <DarkBg>
        <Box width="350px" py="24px" px="24px">
          <InputGroup mb="24px" variant="dark" scale="lg">
            <Input type="text" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            variant="dark"
            scale="md"
          >
            <Input type="text" placeholder="Input Group" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="dark"
            scale="sm"
          >
            <Input type="text" value="Input Group" />
          </InputGroup>

          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="darkWarning"
            scale="md"
            isWarning
          >
            <Input type="text" value="Input Group isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            endIcon={{
              iconName: "PlusCircleSolid",
              color: "success",
            }}
            mb="24px"
            variant="darkError"
            scale="md"
            isError
          >
            <Input type="text" value="Input Group isWarning" />
          </InputGroup>
        </Box>
      </DarkBg>
    </>
  );
};
