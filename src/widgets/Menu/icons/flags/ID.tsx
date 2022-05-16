import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <g clipPath="url(#clipID)">
        <rect width="24" height="24" rx="12" fill="white"/>
        <path d="M-6 0H30V24H-6V0Z" fill="white"/>
        <path d="M-6 0H30V12H-6V0Z" fill="#FF0000"/>
      </g>
      <defs>
        <clipPath id="clipID">
          <rect width="24" height="24" rx="12" fill="white"/>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
