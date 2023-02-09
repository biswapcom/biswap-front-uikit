import React from "react";
import { Box, Flex } from "../Box";
import { Button } from "../Button";
import { lightColors } from "../../theme";
import { BodyText } from "../Typography";
import styled from "styled-components";

export default {
  title: "Components/Colors",
  argTypes: {},
};

const ColorBox = styled(Box)<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-right: 20px;
`;
export const Default = () => {
  const copyHandle = (arg: string) => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(arg);
    }
  };
  return (
    <Box p="20px">
      {Object.entries(lightColors).map((colorItem) => (
        <Flex
          alignItems="center"
          mb="20px"
          justifyContent="space-between"
          width="800px"
        >
          <ColorBox width={100} height={40} backgroundColor={colorItem[1]} />
          <Flex justifyContent="space-between" width="350px">
            <BodyText mr="20px">{colorItem[0]}</BodyText>
            <BodyText>{colorItem[1]}</BodyText>
          </Flex>

          <Box>
            <Button mr="10px" onClick={() => copyHandle(colorItem[0])}>
              Copy Name
            </Button>
            <Button onClick={() => copyHandle(colorItem[1])}>Copy Hash</Button>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
