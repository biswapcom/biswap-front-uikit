import React, { FC } from "react";
import styled from "styled-components";

// components
import TermsAccordion from "./TermsAccordion";
import { Box, BoxProps, Flex } from "../Box";
import { BodyText } from "../Typography";

interface IProps extends BoxProps {
  title?: string;
  revised: string;
  scrollClass?: string;
  description: string;
  termsList: Array<string | JSX.Element>;
  imageSize?: string;
  imageColor?: string;
}

export const StyledList = styled(Box)`
  list-style-type: disc;
`;

export const StyledListItem = styled(Flex)`
  &::before {
    content: "\\2022";
    padding: 2px 8px 0 0;
    color: ${({ theme }) => theme.colors.pastelBlue};
  }
`;

const Terms: FC<IProps> = ({
  title = "Terms of use",
  scrollClass = "",
  termsList,
  description,
  revised,
  imageSize= '30px',
  imageColor = 'primary',
  ...rest
}) => {
  const renderTermsList = (): JSX.Element[] =>
    termsList.map((item, index) => (
      <StyledListItem key={index.toString()} py="8px">
        <BodyText color="pastelBlue" scale="size16">
          {item}
        </BodyText>
      </StyledListItem>
    ));
  return (
    <Box className={scrollClass} {...rest}>
      <TermsAccordion name={title} imageSize={imageSize} imageColor={imageColor}>
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
