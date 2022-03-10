import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="11.999" cy="12.0001" r="10" fill="#1EBB95" />
      <mask
        id="mask0_110_1519"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="9"
        y="2"
        width="15"
        height="22"
      >
        <path
          d="M9.5 22L14.5 2H18L22 5L24 11.5L22 18.5L17 23.5L9.5 22Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_110_1519)">
        <circle cx="11.999" cy="12.0001" r="10" fill="#FF1C5E" />
      </g>
      <path
        d="M6.08946 14.1993L14.535 2.27255L13.3031 10.4212L18.5614 10.1963L9.57151 21.7126L11.3478 13.9744L6.08946 14.1993Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
