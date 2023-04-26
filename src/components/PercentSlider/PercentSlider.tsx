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
import Grid from "../Box/Grid"
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
  shortcutScale = "sm",
  shortcutVariant = "primary",
  numberOfPoints = 5,
  ...props
}) => {
  const [displayPercent, setDisplayPercent] = useState(value.toString());
  const [activeShortcutIndex, setActiveShortcutIndex] =
    useState<number | null>(null);

  useEffect(() => {
    if (value !== parseInt(displayPercent)) {
      setDisplayPercent(value.toString());
    }
  }, [value]);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setDisplayPercent(parseInt(target.value).toFixed(2));
      onValueChanged(Number(parseInt(target.value).toFixed(2)));
      setActiveShortcutIndex(null);
    },
    []
  );

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
        {numberOfPoints && (
          <PointsContainer justifyContent="space-between">
            {Array.from(Array(numberOfPoints).keys()).map((point) => {
              const pointPercent = (100 / (numberOfPoints - 1)) * point;
              return (
                <CircleIcon
                  darkMode={darkMode}
                  key={point.toString()}
                  width="10px"
                  color={getCirclesColor(pointPercent)}
                />
              );
            })}
          </PointsContainer>
        )}
      </div>
      {enableShortcuts && shortcutCheckpoints && (
        <Grid gridTemplateColumns={`repeat(${shortcutCheckpoints.length}, 1fr)`} gridColumnGap="8px" py="16px">
          {shortcutCheckpoints.map((percent, index) => (
            <Button
              key={index.toString()}
              scale={shortcutScale}
              variant={
                activeShortcutIndex === index || value === percent
                  ? "primary"
                  : shortcutVariant
              }
              onClick={() => {
                onValueChanged(percent);
                setDisplayPercent(percent.toString());
                setActiveShortcutIndex(index);
              }}
            >
              {percent}%
            </Button>
          ))}
        </Grid>
      )}
    </Flex>
  );
};

export default PercentSlider;
