import React, { FC, ReactNode, useRef, useState } from "react";
import styled from "styled-components";

// components
import { HeadText } from "../../Typography";
import { Box, Flex } from "../../Box";

// icons
import { MinusIcon, PlusIcon } from "../../Svg";

interface IProps {
  name: string;
  children: ReactNode;
}

const TermsHead = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: max-content;
  }
`;

const TermsWrapper = styled(Box)<{ isOpen: boolean }>`
  height: ${({ isOpen }) => !isOpen && "0"};
  overflow: hidden;
  transition: height ease 0.5s;
`;

const TermsAccordion: FC<IProps> = ({ name = "", children }) => {
  const [isOpened, setOpened] = useState<boolean>(true)

  const contentEl = useRef<HTMLDivElement>(null);

  const TermsHeaderIcon = isOpened ? MinusIcon : PlusIcon;

  return (
    <Box>
      <TermsHead onClick={() => setOpened((prev) => !prev)}>
        <HeadText color="white" scale="size24">
          {name}
        </HeadText>
        <TermsHeaderIcon color="primary" width="30px" ml="8px" />
      </TermsHead>
      <TermsWrapper ref={contentEl} isOpen={isOpened} height={contentEl?.current?.scrollHeight}>
        {children}
      </TermsWrapper>
    </Box>
  );
};

export default TermsAccordion;
