import React, { FC, ReactNode, useRef } from "react";
import styled from "styled-components";

// components
import { ChevronDownIcon } from "../../Svg";
import { HeadText } from "../../Typography";
import { Box, Flex } from "../../Box";

// utils
import { getRgba } from "../../../util";

interface IProps {
  name: string;
  isOpened: boolean;
  handleToggle: (value: string) => void;
  children: ReactNode;
}
const Wrapper = styled(Box)<{ isOpen: boolean }>`
  width: 100%;
  margin-top: 8px;
  border: 1px solid ${({ theme, isOpen }) => (isOpen ? getRgba(theme.colors.primary, theme, 0.16) : "transparent")};
  border-radius: 8px;

  &:hover {
    border-color: ${({ theme }) => getRgba(theme.colors.primary, theme, 0.16)};
  }
`;

const Question = styled(Flex)<{ isOpen: boolean }>`
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme, isOpen }) => (isOpen ? "transparent" : theme.colors.dark600)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: transparent;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
  }
`;

const StyledChevronIcon = styled(({ ...props }) => <ChevronDownIcon {...props} />)<{ isOpen?: boolean }>`
  transform: scale(${({ isOpen }) => (isOpen ? "1, -1" : "1, 1")});
  transition: transform 0.3s ease;
`;

const Answer = styled(Box)<{ isOpen: boolean }>`
  height: ${({ isOpen }) => !isOpen && "0"};
  overflow: hidden;
  transition: height ease 0.3s;
`;

const FaqAccordion: FC<IProps> = ({ name = "", isOpened, handleToggle, children }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <Wrapper isOpen={isOpened}>
      <Question isOpen={isOpened} onClick={() => handleToggle(name)}>
        <HeadText color="white" scale="size14">
          {name}
        </HeadText>
        <StyledChevronIcon isOpen={isOpened} color="primary" width="24px" />
      </Question>
      <Answer ref={contentEl} isOpen={isOpened} height={contentEl?.current?.scrollHeight}>
        {children}
      </Answer>
    </Wrapper>
  );
};

export default FaqAccordion;
