import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#2E7AFF" />
      <rect
        opacity="0.48"
        x="9"
        y="9"
        width="22"
        height="4"
        rx="1"
        fill="white"
      />
      <rect x="9" y="15" width="14" height="16" rx="1" fill="white" />
      <rect
        opacity="0.48"
        x="25"
        y="15"
        width="6"
        height="16"
        rx="1"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
