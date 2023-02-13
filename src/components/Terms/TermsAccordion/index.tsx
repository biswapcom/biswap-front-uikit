import React, { FC, ReactNode, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";

// utils
import { getThemeValue } from "../../../util";

// components
import { HeadText } from "../../Typography";
import { Box, Flex } from "../../Box";

interface IProps {
  name: string;
  imageSize: string;
  imageColor: string;
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

const TermsWrapper = styled(Box)`
  overflow: hidden;
  transition: height ease 0.5s;
`;

const PlusAnimatedIcon = styled.div<{
  imageSize: string;
  isOpen: boolean;
  imageColor: string;
}>`
  position: relative;
  width: ${({ imageSize }) => imageSize};
  height: ${({ imageSize }) => imageSize};
  margin-left: 8px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 46%;
    height: 2px;
    border-radius: 16px;
    background: ${({ imageColor }) => imageColor};
    transform: translate(-50%, -50%);
    transition: transform 0.3s;
  }

  &:before {
    transform: ${({ isOpen }) =>
      `translate(-50%, -50%) ${isOpen ? "rotate(0deg)" : "rotate(90deg)"}`};
  }

  &:after {
    transform: ${({ isOpen }) =>
      `translate(-50%, -50%) ${isOpen ? "rotate(0deg)" : "rotate(180deg)"}`};
  }
`;

const TermsAccordion: FC<IProps> = ({
  name = "",
  imageSize,
  imageColor,
  children,
}) => {
  const [isOpened, setOpened] = useState<boolean>(true);

  const contentEl = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  return (
    <Box>
      <TermsHead onClick={() => setOpened((prev) => !prev)}>
        <HeadText color="white" scale="size24">
          {name}
        </HeadText>
        <PlusAnimatedIcon
          imageSize={imageSize}
          isOpen={isOpened}
          imageColor={getThemeValue(`colors.${imageColor}`, imageColor)(theme)}
        />
      </TermsHead>
      <TermsWrapper
        ref={contentEl}
        height={isOpened ? contentEl?.current?.scrollHeight : "0"}
      >
        {children}
      </TermsWrapper>
    </Box>
  );
};

export default TermsAccordion;
