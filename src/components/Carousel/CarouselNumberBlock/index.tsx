import React, { FC, Fragment } from "react";
import styled, { css } from "styled-components";
import { BodyText } from "../../Typography";

interface Props {
  dataLength: number;
  selectedIndex: number;
  scrollToHandle: (arg: number) => void;
}

const commonStyling = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 32px;
  }
`;

const Numbers = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -2px;
  right: -2px;
  z-index: 2;
  ${commonStyling};
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
  }
`;

const NumberItem = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.dark500};
  box-sizing: border-box;
  border-radius: 50%;
  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)"
      : "transparent"};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : "none")};

  &:hover {
    cursor: pointer;
    border: initial;
    background: linear-gradient(
      235deg,
      #336ff5 4.05%,
      rgba(17, 81, 225, 0.32) 103.52%
    );
  }
`;

// for background (fake elements placed under real Numbers block with glide navigation)
const NumbersBackground = styled.div`
  ${commonStyling};
  height: 40px;
  position: relative;
  background: transparent;
`;

const DummyBlock = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
`;

const Line = styled.div`
  height: 0;
  border-top: 2px dotted ${({ theme }) => theme.colors.dark500};
  flex: 1;
  margin: 0 8px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 16px;
  }
  &:last-of-type {
    display: none;
  }
`;

const CarouselNumbersBlock: FC<Props> = ({
  dataLength,
  scrollToHandle,
  selectedIndex,
}) => {
  const indexes = dataLength
    ? Array.from({ length: dataLength }, (v, i) => i)
    : [];

  return (
    <NumbersBackground>
      <Numbers>
        {indexes.map((item, index) => (
          <NumberItem
            key={item.toString()}
            isActive={index === selectedIndex}
            type="button"
            onClick={() => scrollToHandle(index)}
          >
            <BodyText m="auto" color="pastelBlue">
              {index + 1}
            </BodyText>
          </NumberItem>
        ))}
      </Numbers>
      {indexes.map((item) => (
        <Fragment key={item.toString()}>
          <DummyBlock key={item.toString()} />
          <Line />
        </Fragment>
      ))}
    </NumbersBackground>
  );
};

export default CarouselNumbersBlock;
