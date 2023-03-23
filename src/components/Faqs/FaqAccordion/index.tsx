import React, { FC, ReactNode, useRef } from "react";
import styled from "styled-components";
import { variant } from "styled-system";

// components
import { HeadText } from "../../Typography";
import { Box, Flex } from "../../Box";

// icons
import { ChevronDownIcon } from "../../Svg";

// utils
import { getRgba } from "../../../util";

import { Variant } from "../types";
import { wrapperVariants, questionVariants } from "../theme";

interface IProps {
  name: string;
  isOpened: boolean;
  handleToggle: (value: string) => void;
  children: ReactNode;
  variant: Variant;
}
const Wrapper = styled(Box)<{ isOpen: boolean; variant: Variant }>`
  width: 100%;
  margin-top: 8px;
  ${variant({
    variants: wrapperVariants,
  })}
  background: ${({ isOpen }) => isOpen && "transparent"};
  border: 1px solid
    ${({ theme, isOpen }) =>
      isOpen ? getRgba(theme.colors.primary, theme, 0.16) : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => getRgba(theme.colors.primary, theme, 0.16)};
    background: transparent;
  }
`;

const Question = styled(Flex)<{ isOpen: boolean }>`
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
  }
`;

const StyledText = styled(HeadText)<{ variant: Variant }>`
  ${variant({
    variants: questionVariants,
  })}
`;

const StyledChevronIcon = styled(({ ...props }) => (
  <ChevronDownIcon {...props} />
))<{ isOpen?: boolean }>`
  transform: scale(${({ isOpen }) => (isOpen ? "1, -1" : "1, 1")});
  transition: transform 0.3s ease;
`;

const Answer = styled(Box)`
  overflow: hidden;
  transition: height ease 0.3s;
`;

const FaqAccordion: FC<IProps> = ({
  name = "",
  isOpened,
  handleToggle,
  variant = "dark",
  children,
}) => {
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <Wrapper
      isOpen={isOpened}
      onClick={() => handleToggle(name)}
      variant={variant}
    >
      <Question isOpen={isOpened}>
        <StyledText scale="size14" variant={variant}>
          {name}
        </StyledText>
        <StyledChevronIcon isOpen={isOpened} color="primary" width="24px" />
      </Question>
      <Answer
        ref={contentEl}
        height={isOpened ? contentEl?.current?.scrollHeight : "0"}
      >
        {children}
      </Answer>
    </Wrapper>
  );
};

export default FaqAccordion;
