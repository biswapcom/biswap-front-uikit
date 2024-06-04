import React from "react";
import styled from "styled-components";

// components
import DropdownButton from "./DropdownButton";
import { Flex } from "../Box";

export default {
  title: "Components/DropdownButton",
  component: DropdownButton,
  argTypes: {},
};

const WrapperLight = styled(Flex)`
  height: 150px;
  padding: 32px;
  background-color: #f9fafd;
`;
const WrapperDark = styled(Flex)`
  height: 150px;
  padding: 32px;
  background-color: #07162d;
`;

export const Default: React.FC = () => {
  return (
    <>
      <WrapperLight>
        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="lg"
          dropDownWidth="300px"
          options={[
            {
              label: "Light LG",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
          ]}
        />

        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="md"
          options={[
            {
              label: "Light LG",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
          ]}
        />
        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="sm"
          options={[
            {
              label: "Light LG",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
          ]}
        />
      </WrapperLight>
      <WrapperLight>
        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="lg"
          variant="secondary"
          position="top"
          options={[
            {
              label: "Light LG",
              value: "valueTest",
              icon: {
                name: "AnalyticsSolid",
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

        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="md"
          variant="secondary"
          options={[
            {
              label: "Light MD",
              value: "valueTest",
              icon: {
                name: "Auction",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "BSC",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Gas",
                color: "pastelBlue",
              },
            },
          ]}
        />
        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="sm"
          variant="secondary"
          options={[
            {
              label: "Light SM",
              value: "valueTest",
              icon: {
                name: "Auction",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "BSC",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Gas",
                color: "pastelBlue",
              },
            },
          ]}
        />
      </WrapperLight>
      <WrapperDark>
        <DropdownButton
          mr="24px"
          maxWidth="250px"
          scale="lg"
          variant="light"
          dropDownWidth="400px"
          options={[
            {
              label: "Light LG",
              value: "valueTest",
              icon: {
                name: "VotingSolid",
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

        <DropdownButton
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
        <DropdownButton
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
      </WrapperDark>
      <WrapperDark>
        <DropdownButton
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
        <DropdownButton
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
      </WrapperDark>

      <WrapperLight>
        <DropdownButton
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

        <DropdownButton
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
        <DropdownButton
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
      </WrapperLight>
      <WrapperLight>
        <DropdownButton
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
        <DropdownButton
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
      </WrapperLight>
    </>
  );
};
