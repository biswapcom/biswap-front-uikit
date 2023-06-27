import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect opacity="0.48" x="3" y="13" width="4" height="11" rx="2" />
      <rect opacity="0.48" x="10" y="17" width="4" height="7" rx="2" />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 0C17.8954 0 17 0.89543 17 2V4H21V2C21 0.895431 20.1046 0 19 0ZM21 11H17V22C17 23.1046 17.8954 24 19 24C20.1046 24 21 23.1046 21 22V11Z"
      />
      <rect y="6" width="24" height="3" rx="1" />
    </Svg>
  );
};

export default Icon;
