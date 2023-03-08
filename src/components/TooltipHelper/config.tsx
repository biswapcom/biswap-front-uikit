import React from "react";
import { Box, Flex } from "../Box";
import { BodyText } from "../Typography";
import { getRgba } from "../../util";
import styled from "styled-components";

const TableRow = styled(Flex)`
  padding: 6px 0;
  &:not(:last-child) {
    border-bottom: ${({ theme }) =>
      `1px solid ${getRgba(theme.colors.pastelBlue, theme, 0.16)}`};
  }
`;
const exampleArray = [
  { id: 1, maxStake: 56 },
  { id: 2, maxStake: 526 },
  { id: 3, maxStake: 6 },
  { id: 4, maxStake: 506 },
];
const CustomTooltip = () => {
  return (
    <Box width="194px">
      <BodyText mb="8px" scale="size12" color="gray700">
        Example Tooltip
      </BodyText>
      <Box>
        <Flex>
          <BodyText width="26%" scale="size12" color="gray700">
            Text
          </BodyText>
          <BodyText width="74%" scale="size12" color="gray700">
            12
          </BodyText>
        </Flex>
        {exampleArray.map((level) => (
          <TableRow key={level.id.toString()} alignItems="center">
            <BodyText width="26%" scale="size12" color="white">
              {level.id}
            </BodyText>
            <Flex>
              <BodyText
                ml="4px"
                width="74%"
                scale="size12"
                color="white"
                nowrap
              >
                {`${level.maxStake} BSW`}
              </BodyText>
            </Flex>
          </TableRow>
        ))}
      </Box>
    </Box>
  );
};

export default CustomTooltip;
