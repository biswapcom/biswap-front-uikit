import React from "react";
import { DefaultTheme, useTheme } from "styled-components";

import { Svg, SvgProps } from "../Svg";
import getThemeValue from "../../util/getThemeValue";

interface CircleProps extends SvgProps {
  darkMode?: boolean;
}

interface ThemedProps extends CircleProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const CircleIcon: React.FC<CircleProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 10 10" {...props}>
      <rect
        x="1.5"
        y="1.5"
        width="7"
        height="7"
        rx="3.5"
        fill={props.darkMode ? theme.colors.dark700 : "white"}
        stroke={getColor({ color: props.color, theme })}
        strokeWidth="3"
      />
    </Svg>
  );
};

export default CircleIcon;
