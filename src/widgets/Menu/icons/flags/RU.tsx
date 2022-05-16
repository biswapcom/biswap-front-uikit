import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <g clipPath="url(#clip0)">
        <rect width="14" height="14" rx="7" fill="white"/>
        <path d="M14 10H0V15H14V10Z" fill="#D52B1E"/>
        <path d="M18 4H-5V10H18V4Z" fill="#0039A6"/>
        <path d="M20 -1H-3V4H20V-1Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="14" rx="7" fill="white"/>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
