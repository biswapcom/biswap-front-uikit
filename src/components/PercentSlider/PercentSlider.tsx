import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  BarBackground,
  BarProgress,
  PointsContainer,
  StyledInput,
} from "./styles";
import { PercentSliderProps } from "./types";
import Button from "../Button/Button";
import Flex from "../Box/Flex";
import CircleIcon from "./CircleIcon";

const PercentSlider: React.FC<PercentSliderProps> = ({
  name = "slider",
  min = 0,
  max = 100,
  value,
  onValueChanged,
  disabled = false,
  enableShortcuts,
  shortcutCheckpoints = [0, 25, 50, 75, 100],
  ...props
}) => {
  const [displayPercent, setDisplayPercent] = useState(value.toString());

  useEffect(() => {
    if (value !== parseInt(displayPercent)) {
      onValueChanged(parseInt(displayPercent));
    }
  }, [displayPercent]);

  useEffect(() => {
    setDisplayPercent(value.toString())
  }, [value])

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setDisplayPercent(target.value);
    },
    []
  );

  const setMax = useCallback(() => {
    setDisplayPercent(max.toString());
  }, [max]);

  return (
    <Flex position="relative" flexDirection="column" {...props}>
      <div>
        <Flex justifyContent="center">
          <BarBackground disabled={disabled} />
        </Flex>
        <BarProgress style={{ width: `calc(${displayPercent}% - 5px)` }} />
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={displayPercent}
          step="any"
          onChange={handleChange}
          disabled={disabled}
        />
        {shortcutCheckpoints && (
          <PointsContainer justifyContent="space-between">
            {shortcutCheckpoints.map((pointPercent, index) => (
              <CircleIcon
                key={index.toString()}
                width="10px"
                color={
                  value >= pointPercent
                    ? "primary"
                    : disabled
                    ? "textDisabled"
                    : "gray300"
                }
              />
            ))}
          </PointsContainer>
        )}
      </div>
      {enableShortcuts && shortcutCheckpoints && (
        <Flex justifyContent="space-between" py="16px">
          {shortcutCheckpoints.map((percent, index) => (
            <Button
              key={index.toString()}
              scale="sm"
              variant="primary"
              onClick={() => {
                setDisplayPercent(percent.toString());
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
