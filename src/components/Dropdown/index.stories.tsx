import React from "react";
import styled from "styled-components";
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "BSC",
                color: "success",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
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
