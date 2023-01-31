import React, { FC } from "react";
import styled from "styled-components";

// components
import TermsAccordion from "./TermsAccordion";
import { Box, BoxProps, Flex } from "../Box";
import { Text } from "../Text";
import { BodyText } from "../Typography";

interface IProps extends BoxProps {
  title?: string;
  revised: string;
  scrollClass?: string;
  description: string;
  termsList: Array<string | JSX.Element>;
}

export const StyledList = styled(Box)`
  list-style-type: disc;
`;

export const StyledListItem = styled(Flex)`
  &::before {
    content: "\\2022";
    color: ${({ theme }) => theme.colors.pastelBlue};
    padding-top: 2px;
    padding-right: 8px;
  }
`;

const Terms: FC<IProps> = ({
  title = "Terms of use",
  scrollClass = "",
  termsList,
  description,
  revised,
  ...rest
}) => {
  const renderTermsList = (): JSX.Element[] =>
    termsList.map((item, index) => (
      <StyledListItem py="8px" key={index.toString()}>
        <Text small lineHeight="20px" color="pastelBlue">
          {item}
        </Text>
      </StyledListItem>
    ));
  return (
    <Box className={scrollClass} {...rest}>
      <TermsAccordion name={title}>
        <Box>
          <BodyText mt="24px" color="warning" scale="size16" bold>
            {revised}
          </BodyText>
          <BodyText mt="16px" color="white" scale="size16">
            {description}
          </BodyText>
          <StyledList mt="8px" pl="8px">{renderTermsList()}</StyledList>
        </Box>
      </TermsAccordion>
    </Box>
  );
};

export default Terms;
