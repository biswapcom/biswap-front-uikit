import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 14 14">
    <g clipPath="url(#a)">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Z" fill="#E30A17" />
        <mask
          id="b"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={14}
          height={14}
        >
          <circle cx={7} cy={7} r={7} fill="#C4C4C4" />
        </mask>
        <g clipPath="url(#c)">
          <path d="M-3 1h22v14.667H-3V1Z" fill="#E30A17" />
          <path
            d="m7.092 6.942 2.55-.829-1.576 2.17V5.6l1.576 2.17-2.55-.83Zm.173 1.507a2.82 2.82 0 1 1 0-3.015 2.256 2.256 0 1 0 0 3.015Z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Z" fill="#fff" />
        </clipPath>
        <clipPath id="c">
          <path fill="#fff" transform="translate(-3)" d="M0 0h22v16H0z" />
        </clipPath>
      </defs>
  </Svg>
  );
};

export default Icon;
