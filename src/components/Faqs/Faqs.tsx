import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import { BodyText, HeadText } from "../Typography";
import { Box, BoxProps, Flex, Grid } from "../Box";
import FaqAccordion from "./FaqAccordion";

// types
import { QuestionProp } from "./types";

interface IProps extends BoxProps {
  title?: string;
  leftData: QuestionProp[];
  rightData: QuestionProp[];
  blogFAQ?: boolean;
}

const ContentWrapper = styled(Grid)<{ blogFAQ: boolean }>`
  grid-template-columns: 1fr;

  ${({ theme, blogFAQ }) =>
    blogFAQ ? theme.mediaQueries.xl : theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }
`;

const Faqs: FC<IProps> = ({
  title = "FAQs",
  leftData,
  rightData,
  blogFAQ = false,
  ...props
}) => {
  const [activeQuestion, setActiveQuestion] = useState<string>("");

  const handleToggle = (name: string) => {
    setActiveQuestion(activeQuestion !== name ? name : "");
  };

  // markup for question
  const renderQuestionList = (list: QuestionProp[]) =>
    (list || []).map((item, index) => (
      <FaqAccordion
        key={index.toString()}
        name={item.name}
        isOpened={activeQuestion === item.name}
        handleToggle={handleToggle}
      >
        <BodyText scale="size14" color="gray700" p="0 16px 16px">
          {item.description}
        </BodyText>
      </FaqAccordion>
    ));

  return (
    <Box {...props}>
      {title && (
        <HeadText scale="size24" color="white" mb="16px">
          {title}
        </HeadText>
      )}
      <ContentWrapper blogFAQ={blogFAQ}>
        <Flex flexDirection="column">{renderQuestionList(leftData)}</Flex>
        <Flex flexDirection="column">{renderQuestionList(rightData)}</Flex>
      </ContentWrapper>
    </Box>
  );
};

export default Faqs;
