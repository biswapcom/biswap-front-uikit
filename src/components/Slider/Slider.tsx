import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { parseInt } from "lodash";
import {Box, BoxProps, Flex} from "../Box";
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
  opacity: .16;
  background-color: ${({ theme }) => theme.colors.pastelBlue};
`;

const BarProgress = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 4px;
  transform: translateY(-100%);
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled.input`
  height: 20px;
  position: relative;
  cursor: pointer;
  transform: translateY(-18px);
  margin: 2px 0;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.1s all;
    background-image: url(${SliderIcon});

    :hover {
      transform: scale(1.1);
    }
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
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
    width: 20px;
    height: 20px;
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
  padding: 0 9px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Point = styled.div`
  width: 2px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled};
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  color: black;
  font-weight: 600;
`;

const PercentageAmount = styled(Text)`
  font-size: 16px;
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
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const PercentWrap = styled.div`
  width: calc(100% - 20px);
  margin: 0 10px;
  position: relative;
`

const PercentBanner = styled(Flex)<{ left: number, bannerPosition: 'top' | 'bottom' }>`
  align-items: center;
  position: absolute;
  ${({ bannerPosition }) => bannerPosition === 'top' ? 'top: 0' : 'bottom: 0'};
  left: ${({ left }) => `${left}%`};
  transform: translateX(-50%) translateY(calc(${({ bannerPosition }) => 
      bannerPosition === 'top' ? '-100% - 20px' : '100% + 20px'}));
  border-radius: 8px;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.colors.tooltip};
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    ${({ bannerPosition }) => bannerPosition === 'top' ? 'bottom: 0' : 'top: 0'};
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: translate(-50%, ${({ bannerPosition }) => bannerPosition === 'top' ? '100%' : '-100%'});
    ${({ bannerPosition, theme }) => 
        `border-${bannerPosition === 'top' ? 'top' : 'bottom'}: 6px solid ${theme.colors.tooltip}`};
`

const Divider = styled.span`
  width: 2px;
  height: 10px;
  margin: 0 4px 0 4px;
  background-color: ${({ theme }) => theme.colors.gray900};
`

const PercentText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  min-width: 24px;
  
  &:first-child {
    text-align: right;
  }
`

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 10 is arbitrary, but seems to work...
const MOVING_SLIDER_LABEL_OFFSET_FACTOR = 25;

interface SliderProps extends BoxProps {
  value: number;
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  checkPoints?: Checkpoint[];
  isRobiBoost?: boolean;
  bannerPosition?: 'top' | 'bottom'
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
  bannerPosition = 'top',
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

  const [infoVisible, setInfoVisible] = useState<boolean>(false)

  return (
    <Wrapper>
      <SliderContainer {...props}>
        <BunnySlider>
          <PercentWrap>
            {infoVisible && <PercentBanner className='percent-info-banner' bannerPosition={bannerPosition} left={percent?.value}>
              <PercentText>{value}</PercentText>
              <Divider/>
              <PercentText>{100 - value}</PercentText>
            </PercentBanner>}
          </PercentWrap>
          <BarBackground />
          <BarProgress progress={progressPercentage} />
          <StyledInput
            onMouseDown={() => setInfoVisible(true)}
            onMouseUp={() => setInfoVisible(false)}
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
        price 1{' '}{isRobiBoost ? "RB" : "SE"} = ${percent.RB} volume
      </RBPrice>
    </Wrapper>
  );
};

export default Slider;
