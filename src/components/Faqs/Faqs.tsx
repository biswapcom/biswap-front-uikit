import React, { FC, useState } from "react";
import { ceil, take, takeRight } from "lodash";
import styled from "styled-components";

// components
import { BodyText, HeadText } from "../Typography";
import { Box, BoxProps, Flex, Grid } from "../Box";
import FaqAccordion from "./FaqAccordion";

// types
import { QuestionProp } from "./types";

interface IProps extends BoxProps {
  title?: string;
  questions: QuestionProp[];
}

const ContentWrapper = styled(Grid)`
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }
`;

const Faqs: FC<IProps> = ({ title = "FAQs", questions = [], ...props }) => {
  const [activeQuestion, setActiveQuestion] = useState<string>("");

  // count how many items in left side data
  const leftLength = ceil(questions.length / 2);
  // count how many items in right side data
  const rightLength = questions.length - leftLength;
  // slice left data
  const leftData = take(questions, leftLength);
  // slice right data
  const rightData = takeRight(questions, rightLength);

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
      <ContentWrapper>
        <Flex flexDirection="column">{renderQuestionList(leftData)}</Flex>
        <Flex flexDirection="column">{renderQuestionList(rightData)}</Flex>
      </ContentWrapper>
    </Box>
  );
};

export default Faqs;
