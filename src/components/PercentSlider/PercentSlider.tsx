import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  BarBackground,
  BarProgress,
  PercentSliderLabel,
  PointsContainer,
  StyledInput,
} from "./styles";
import Button from "../Button/Button";
import Flex from "../Box/Flex";
import CircleIcon from "./CircleIcon";
import { PercentSliderProps } from "./types";
import { Text } from "../Text";

const PercentSlider: React.FC<PercentSliderProps> = ({
  name = "slider",
  min = 0,
  max = 100,
  value,
  onValueChanged,
  disabled = false,
  enableShortcuts,
  shortcutCheckpoints = [0, 25, 50, 75, 100],
  withTooltip,
  bannerPosition = "bottom",
  darkMode = false,
  ...props
}) => {
  const [displayPercent, setDisplayPercent] = useState(value.toString());

  useEffect(() => {
    if (value !== parseInt(displayPercent)) {
      setDisplayPercent(value.toString());
    }
  }, [value]);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setDisplayPercent(target.value);
      onValueChanged(parseInt(target.value));
    },
    []
  );

  const setMax = useCallback(() => {
    setDisplayPercent(max.toString());
    onValueChanged(max);
  }, [max]);

  const [infoVisible, setInfoVisible] = useState<boolean>(false);

  const getCirclesColor = (pointPercent: number) => {
    return value >= pointPercent
      ? "primary"
      : disabled
      ? "textDisabled"
      : darkMode
      ? "dark400"
      : "gray300";
  };

  return (
    <Flex position="relative" flexDirection="column" {...props}>
      <div>
        <Flex justifyContent="center">
          <BarBackground darkMode={darkMode} disabled={disabled} />
        </Flex>
        <BarProgress style={{ width: `calc(${displayPercent}% - 5px)` }} />
        <StyledInput
          name={name}
          onMouseDown={() => setInfoVisible(true)}
          onMouseUp={() => setInfoVisible(false)}
          onTouchStart={() => setInfoVisible(true)}
          onTouchEnd={() => setInfoVisible(false)}
          type="range"
          min={min}
          max={max}
          value={displayPercent}
          step="any"
          onChange={handleChange}
          disabled={disabled}
        />
        {withTooltip && infoVisible && (
          <PercentSliderLabel
            className="percent-info-banner"
            bannerPosition={bannerPosition}
            left={Number(displayPercent)}
          >
            <Text color="white">{value}%</Text>
          </PercentSliderLabel>
        )}
        {shortcutCheckpoints && (
          <PointsContainer justifyContent="space-between">
            {shortcutCheckpoints.map((pointPercent, index) => (
              <CircleIcon
                darkMode={darkMode}
                key={index.toString()}
                width="10px"
                color={getCirclesColor(pointPercent)}
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
