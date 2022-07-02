import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { scales } from "./types";

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
              <Input type="text" scale={scale} variant="light" value="Value" />
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
                placeholder="Disabled"
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
              <Input type="text" scale={scale} variant="dark" value="Value" />
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
                placeholder="Disabled"
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
        <Heading mb="16px">Input group LG</Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant="light"
            scale="lg"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="light"
            scale="lg"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="light"
            scale="lg"
            mr="16px"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="lightWarning"
            scale="lg"
            mr="16px"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="lightError"
            scale="lg"
            mr="16px"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group MD</Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant="light"
            scale="md"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="light"
            scale="md"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="light"
            scale="md"
            mr="16px"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="lightWarning"
            scale="md"
            mr="16px"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="lightError"
            scale="md"
            mr="16px"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group SM</Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant="light"
            scale="sm"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="light"
            scale="sm"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="light"
            scale="sm"
            mr="16px"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="lightWarning"
            scale="sm"
            mr="16px"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="lightError"
            scale="sm"
            mr="16px"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with left(start) icon</Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="lightWarning"
            scale="lg"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="lightError"
            scale="lg"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with right(end) icon</Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="lightWarning"
            scale="lg"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="lightError"
            scale="lg"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with double(start, end) icon</Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="light"
            scale="lg"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="lightWarning"
            scale="lg"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="lightError"
            scale="lg"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>
      </LightBg>

      <DarkBg>
        <Heading mb="16px" color="white">
          Input group LG
        </Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="lg"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="lg"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="lg"
            mr="16px"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="darkWarning"
            scale="lg"
            mr="16px"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="darkError"
            scale="lg"
            mr="16px"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group MD
        </Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="md"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="md"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="md"
            mr="16px"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="darkWarning"
            scale="md"
            mr="16px"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="darkError"
            scale="md"
            mr="16px"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group SM
        </Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="sm"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="sm"
            mr="16px"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="dark"
            scale="sm"
            mr="16px"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="darkWarning"
            scale="sm"
            mr="16px"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant="darkError"
            scale="sm"
            mr="16px"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with left(start) icon
        </Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="darkWarning"
            scale="lg"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="darkError"
            scale="lg"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with right(end) icon
        </Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="darkWarning"
            scale="lg"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="darkError"
            scale="lg"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with double(start, end) icon
        </Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="dark"
            scale="lg"
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="darkWarning"
            scale="lg"
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "Binance",
              color: "gray",
            }}
            endIcon={{
              iconName: "Search",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant="darkError"
            scale="lg"
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>
      </DarkBg>
    </>
  );
};
