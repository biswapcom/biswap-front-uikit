import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 21 20" fill="none" {...props}>
      <rect
        x="1.61121"
        y="0.833328"
        width="6.66667"
        height="6.66667"
        rx="3.33333"
      />
      <rect
        opacity="0.48"
        x="1.61121"
        y="12.5"
        width="6.66667"
        height="6.66667"
        rx="1"
      />
      <rect
        opacity="0.48"
        x="13.2778"
        y="0.833328"
        width="6.66667"
        height="6.66667"
        rx="1"
      />
      <rect
        opacity="0.48"
        x="13.2778"
        y="12.5"
        width="6.66667"
        height="6.66667"
        rx="1"
      />{" "}
    </Svg>
  );
};

export default Icon;
