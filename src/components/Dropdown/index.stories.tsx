import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const WrapperLight = styled.div`
  display: flex;
  background-color: #f9fafd;
  padding: 32px;
  height: 150px;
`;
const WrapperDark = styled.div`
  display: flex;
  background-color: #07162d;
  padding: 32px;
  height: 150px;
`;

export const Default: React.FC = () => {
  return (
    <>
      <WrapperLight>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="lg"
          variant="light"
          options={[
            {
              label: "Light LG",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "BSC",
                color: "success",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Gas",
                color: "secondary",
              },
            },
          ]}
        />

        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="md"
          variant="light"
          options={[
            {
              label: "Light MD",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="light"
          options={[
            {
              label: "Light SM",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
      </WrapperLight>
      <WrapperLight>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="light"
          options={[
            {
              label: "Light open to top",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          position="top"
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="light"
          options={[
            {
              label: "Light disabled",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          disabled
        />
      </WrapperLight>

      <WrapperDark>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="lg"
          variant="dark"
          options={[
            {
              label: "Dark LG",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />

        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="md"
          variant="dark"
          options={[
            {
              label: "Dark MD",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="dark"
          options={[
            {
              label: "Dark SM",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
      </WrapperDark>
      <WrapperDark>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="dark"
          options={[
            {
              label: "Dark open to top",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          position="top"
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="dark"
          options={[
            {
              label: "Dark disabled",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          disabled
        />
      </WrapperDark>
    </>
  );
};
