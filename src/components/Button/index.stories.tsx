/* eslint-disable import/no-extraneous-dependencies */
import { camelCase } from "lodash";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import {Heading} from "../Heading";
import { AddIcon, AutoRenewIcon, LogoIcon } from "../Svg";
import IconButton from "./IconButton";
import Button from "./Button";
import { ExpandableButton, ExpandableLabel } from "./ExpandableButton";
import { scales, variants } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Wrapper = styled.div`
  padding: 32px 24px;
  background: #07162D;
`

const Row = styled(Flex)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export const Default: React.FC = () => {

  const baseBtn = {
    PRIMARY: "primary",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
    BOOST: "boost",
  } as const

  const darkBgBtn = {
    LIGHT_OUT: "LightOut",
    LIGHT: "light",
  } as const

  const lightBgBtn = {
    TERTIARY: "tertiary",
    TERTIARY_OUT: "tertiaryOut",
  } as const

  return (
    <Wrapper>
      <Box mb="48px">
        <Heading color="white" mb="24px">Scales</Heading>
        {Object.values(scales).map((scale) => {
          return (
            <Button key="md" variant="primary" scale={scale} mr="8px" mb="8px">
              {`Primary ${scale}`}
            </Button>
          );
        })}
      </Box>

      <Box mb="48px">
        <Heading color="white" mb="24px">BASE variants</Heading>
        {Object.values(baseBtn).map((variant) => {
          return (
            <Button key={variant} variant={variant} scale="lg" mr="8px">
              {`${camelCase(variant)}`}
            </Button>
          );
        })}
      </Box>

      <Box mb="48px">
        <Heading color="white" mb="24px">DISABLED</Heading>
        {Object.values(baseBtn).map((variant) => {
          return (
            <Button key={variant} variant={variant} scale="lg" mr="8px" disabled>
              {`${camelCase(variant)}`}
            </Button>
          );
        })}
      </Box>

      <Flex justifyContent="space-between">
        <Box mb="48px">
          <Heading color="white" mb="16px">Dark background</Heading>
          {Object.values(darkBgBtn).map((variant) => {
            return (
              <Button key="md" variant={variant} scale="lg" mr="8px" mb="8px">
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
        <Box mb="48px">
          <Heading color="white" mb="16px">Dark background DISABLED</Heading>
          {Object.values(darkBgBtn).map((variant) => {
            return (
              <Button key="md" variant={variant} scale="lg" mr="8px" mb="8px" disabled>
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
      </Flex>

      <Flex justifyContent="space-between" mx="-24px" py="24px" px="24px" background="#F9FAFD">
        <Box mb="48px">
          <Heading color="backgroundDark" mb="16px">Light background</Heading>
          {Object.values(lightBgBtn).map((variant) => {
            return (
              <Button key="md" variant={variant} scale="lg" mr="8px" mb="8px">
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
        <Box mb="48px">
          <Heading color="backgroundDark" mb="16px">Light background DISABLED</Heading>
          {Object.values(lightBgBtn).map((variant) => {
            return (
              <Button key="md" variant={variant} scale="lg" mr="8px" mb="8px" disabled>
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
      </Flex>
    </Wrapper>
  );
};




//-----------------------
export const Anchors: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        {Object.values(variants).map((variant) => {
          return (
            <Box key={variant} mb="32px">
              {Object.values(scales).map((scale) => {
                return (
                  <Button
                    as="a"
                    href="https://pancakeswap.finance"
                    key={scale}
                    variant={variant}
                    scale={scale}
                    external
                    mr="8px"
                  >
                    {`${camelCase(variant)} anchor ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box>
        <Button
          as="a"
          href="https://pancakeswap.finance"
          mr="8px"
          external
          disabled
        >
          Disabled
        </Button>
        <Button
          as="a"
          href="https://pancakeswap.finance"
          variant="primary"
          external
          disabled
        >
          Disabled
        </Button>
      </Box>
    </>
  );
};

export const Variants: React.FC = () => {
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant="primary">
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%">Full size</Button>
        </Row>
        <Row>
          <Button
            isLoading
            endIcon={<AutoRenewIcon spin color="currentColor"/>}
          >
            Approving
          </Button>
          <Button isLoading variant="success">
            Approving
          </Button>
        </Row>
        <Row>
          <Button startIcon={<LogoIcon/>}>Start Icon</Button>
          <Button endIcon={<LogoIcon/>}>End Icon</Button>
          <Button startIcon={<LogoIcon/>} endIcon={<LogoIcon/>}>
            Start & End Icon
          </Button>
        </Row>
        <Row>
          <IconButton>
            <LogoIcon />
          </IconButton>
          <IconButton variant="primary">
            <AddIcon />
          </IconButton>
        </Row>
        <Row>
          <IconButton scale="sm" variant="danger">
            <LogoIcon />
          </IconButton>
          <IconButton scale="sm" variant="success">
            <AddIcon color="currentColor" />
          </IconButton>
        </Row>
      </BrowserRouter>
    </Box>
  );
};

export const Expandable: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <ExpandableButton
            expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          />
          <ExpandableLabel
            expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            ExpandableLabel
          </ExpandableLabel>
        </Row>
      </BrowserRouter>
    </Box>
  );
};
