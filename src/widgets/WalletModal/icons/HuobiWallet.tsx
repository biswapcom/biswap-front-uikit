import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="white" />
      <g transform="translate(0,32) scale(0.1,-0.1)" stroke="none">
        <path fill="#01003b" d="M157 253 c-3 -15 -19 -46 -36 -67 -17 -21 -31 -45 -31 -53 0 -28 31 -72 51 -73 3 0 4 14 1 30 -3 21 3 42 22 70 29 44 31 64 12 99 l-13 23 -6 -29z"/>
        <path fill="#3e89d0" d="M198 158 c-22 -34 -30 -66 -21 -83 8 -13 12 -13 31 5 22 21 29 64 13 88 -6 10 -12 8 -23 -10z"/>
      </g>
    </Svg>
  );
};

export default Icon;
