import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import { variant } from "styled-system";

// components
import { BodyText } from "../Typography";
import { Box, BoxProps, Flex, Grid } from "../Box";
import FaqAccordion from "./FaqAccordion";

// types
import { QuestionProp, Variant } from "./types";

import { descriptionVariants, titleVariants } from "./theme";

type TitlePositionType = "start" | "center" | "end";

interface IProps extends BoxProps {
  title?: string;
  leftData: QuestionProp[];
  rightData?: QuestionProp[];
  variant?: Variant;
  blogFAQ?: boolean;
  titlePosition?: TitlePositionType;
}

const Title = styled(BodyText)<{
  variant: Variant;
  titlePosition: TitlePositionType;
}>`
  text-align: ${({ titlePosition }) => titlePosition}};

  ${variant({
    variants: titleVariants,
  })}
`;

const ContentWrapper = styled(Grid)<{ blogFAQ: boolean; singleList: boolean }>`
  grid-template-columns: 1fr;

  ${({ theme, blogFAQ }) =>
    blogFAQ ? theme.mediaQueries.xl : theme.mediaQueries.md} {
    ${({ singleList }) =>
      !singleList &&
      css`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 32px;
      `}
  }
`;

const Description = styled(BodyText)<{ variant: Variant }>`
  ${variant({
    variants: descriptionVariants,
  })}
`;

const Faqs: FC<IProps> = ({
  title = "FAQs",
  leftData,
  rightData,
  variant = "dark",
  blogFAQ = false,
  titlePosition = "start",
  ...props
}) => {
  const [activeQuestion, setActiveQuestion] = useState<string>("");

  const handleToggle = (name: string) => {
    setActiveQuestion(activeQuestion !== name ? name : "");
  };

  const isDarkMobile = variant === "dark" ? "size24" : "size20";
  // markup for question
  const renderQuestionList = (list: QuestionProp[]) =>
    (list || []).map((item, index) => (
      <FaqAccordion
        key={index.toString()}
        name={item.name}
        isOpened={activeQuestion === item.name}
        handleToggle={handleToggle}
        variant={variant}
      >
        <Description as="div" scale="size14" p="0 16px 16px" variant={variant}>
          {item.description}
        </Description>
      </FaqAccordion>
    ));

  return (
    <Box {...props}>
      {title && (
        <Title
          titlePosition={titlePosition}
          scale={{ xs: isDarkMobile, md: "size24" }}
          mb="16px"
          bold
          variant={variant}
        >
          {title}
        </Title>
      )}
      <ContentWrapper blogFAQ={blogFAQ} singleList={!rightData}>
        <Flex flexDirection="column">{renderQuestionList(leftData)}</Flex>
        {rightData && (
          <Flex flexDirection="column">{renderQuestionList(rightData)}</Flex>
        )}
      </ContentWrapper>
    </Box>
  );
};

export default Faqs;
