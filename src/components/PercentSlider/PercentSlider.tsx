import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {
  BarBackground,
  BarProgress, PointsContainer,
  StyledInput,
} from "./styles";
import SliderProps from "./types";
import Button from "../Button/Button";
import Flex from "../Box/Flex";
import CircleIcon from "./CircleIcon";

const PercentSlider: React.FC<SliderProps> = ({
  name,
  min = 0,
  max = 100,
  value,
  onValueChanged,
  disabled = false,
  enableShortcuts,
  shortcutCheckpoints,
  ...props
}) => {
  const [displayPercent, setDisplayPercent] = useState(value.toString())

  useEffect(() => {
    if (value !== parseInt(displayPercent)) {
      onValueChanged(parseInt(displayPercent))
    }
  }, [displayPercent])

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>): void => {
    setDisplayPercent(target.value)
  }, [])

  const setMax = useCallback(() => {
    setDisplayPercent(max.toString())
  }, [max])

  const pointsCoordinates = shortcutCheckpoints ? [0, ...shortcutCheckpoints] : null

  return (
    <Flex position='relative' flexDirection='column' {...props}>
      <div>
        <BarBackground disabled={disabled} />
        <BarProgress style={{ width: `${displayPercent}%` }} disabled={disabled} />
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={displayPercent}
          step='any'
          onChange={handleChange}
          disabled={disabled}
        />
        {pointsCoordinates && <PointsContainer justifyContent='space-between'>
          {pointsCoordinates.map((pointPercent) => <CircleIcon width='10px' color={value >= pointPercent ? 'primary' : 'gray900'} />)}
        </PointsContainer>}
      </div>
      {enableShortcuts && shortcutCheckpoints && (
        <Flex justifyContent="space-between" py="16px">
          {shortcutCheckpoints.map((percent) => (
            <Button
              scale="sm"
              variant="primary"
              onClick={() => {
                setDisplayPercent((percent.toString()));
              }}
            >
              {percent}%
            </Button>
          ))}
          <Button scale="sm" variant="primary" onClick={setMax}>
            Max
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default PercentSlider;
