import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { parseInt } from "lodash";
import { Box, BoxProps } from "../Box";
import SliderIcon from "./Slider.svg";
import { Text } from "../Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SliderContainer = styled(Box)`
  position: relative;
  top: 0;
  left: 0;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.success};
`;

const BarProgress = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 4px;
  transform: translateY(-100%);
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled.input`
  height: 16px;
  position: relative;
  cursor: pointer;
  transform: translateY(-100%);
  margin: 2px 0;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition: 0.1s all;
    background-image: url(${SliderIcon});

    :hover {
      transform: scale(1.1);
    }
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition: 0.1s all;
    // custom moz reset
    background-color: transparent;
    border: 0;

    :hover {
      transform: scale(1.1);
    }
  }
  ::-ms-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition: 0.1s all;
    background-image: url(${SliderIcon});
    :hover {
      transform: scale(1.1);
    }
  }
`;

const BunnySlider = styled.div`
  position: absolute;
  width: 100%;
`;

const BreakePointsWrap = styled.div`
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const Point = styled.div`
  width: 2px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled(Text)`
  font-size: 14px;
  line-height: 150%;
  color: black;
  font-weight: 500;
`;

const PercentageAmount = styled(Text)<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 14px;
  margin: 0 4px;
  font-weight: 600;
`;

const InfoNode = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RBPrice = styled(Text)`
  text-align: right;
  font-size: 12px;
  line-height: 150%;
  font-weight: 500;
  color: black;
`;

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 10 is arbitrary, but seems to work...
const MOVING_SLIDER_LABEL_OFFSET_FACTOR = 25;

interface SliderProps extends BoxProps {
  value: number;
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  checkPoints?: Checkpoint[];
  isRobiBoost?: boolean;
}

interface Checkpoint {
  value: number;
  RB: number;
}

const MIN = 0;
const MAX = 100;

const INIT_CHECKPOINTS: Checkpoint[] = [
  { value: 0, RB: 1000 },
  { value: 25, RB: 2500 },
  { value: 50, RB: 5000 },
  { value: 75, RB: 7500 },
  { value: 90, RB: 10000 },
];

const Slider: React.FC<SliderProps> = ({
  value,
  onValueChanged,
  checkPoints = INIT_CHECKPOINTS,
  isRobiBoost,
  ...props
}) => {
  const [percent, setPercent] = useState({ value: 0, RB: 0 });

  const getRB = (percentage: number) => {
    const temp = checkPoints.map((item) => Math.abs(item.value - percentage));
    const minValue = Math.min(...temp);
    const res = temp.indexOf(minValue);
    return checkPoints[res].RB;
  };

  useEffect(() => {
    if (checkPoints?.length) {
      const RB = getRB(value);
      setPercent({ value, RB });
    }
    // eslint-disable-next-line
  }, [value, checkPoints]);

  const onMouseLeaveHandleChange = () => {
    const temp = checkPoints.map((item) =>
      Math.abs(item.value - percent.value)
    );
    const minValue = Math.min(...temp);
    const res = temp.indexOf(minValue);
    onValueChanged(checkPoints[res].value);
    setPercent(checkPoints[res]);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(target.value);
    switch (selectedValue) {
      case checkPoints[0].value: {
        onValueChanged(0);
        break;
      }
      case checkPoints[1].value: {
        onValueChanged(checkPoints[1].value);
        break;
      }
      case checkPoints[2].value: {
        onValueChanged(checkPoints[2].value);
        break;
      }
      case checkPoints[3].value: {
        onValueChanged(checkPoints[3].value);
        break;
      }
      case checkPoints[4].value: {
        onValueChanged(checkPoints[4].value);
        setPercent((prev) => ({ ...prev, value: checkPoints[4].value }));
        break;
      }
      default: {
        if (selectedValue <= checkPoints[4].value)
          setPercent((prev) => ({ ...prev, value: selectedValue }));
      }
    }
  };

  const progressPercentage = (percent.value / MAX) * 100;

  // const labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;

  return (
    <Wrapper>
      <SliderContainer {...props}>
        <BunnySlider>
          <BarBackground />
          <BarProgress progress={progressPercentage} />
          <StyledInput
            type="range"
            min={MIN}
            max={MAX}
            value={percent.value}
            onChange={handleChange}
            onClick={() => onMouseLeaveHandleChange()}
          />
        </BunnySlider>
      </SliderContainer>
      <BreakePointsWrap>
        {checkPoints?.map((item, index) => (
          <Point key={index.toString()} />
        ))}
      </BreakePointsWrap>
      <InfoBlock>
        <InfoNode>
          <TitleText>Fee return</TitleText>
          <PercentageAmount color="primary">{value}%</PercentageAmount>
        </InfoNode>
        <InfoNode>
          <PercentageAmount color="success">{100 - value}%</PercentageAmount>
          <TitleText>{isRobiBoost ? "Robi Boost" : "Squid Energy"}</TitleText>
        </InfoNode>
      </InfoBlock>
      <RBPrice>
        price 1{isRobiBoost ? "RB" : "SE"} = ${percent.RB} volume
      </RBPrice>
    </Wrapper>
  );
};

export default Slider;
