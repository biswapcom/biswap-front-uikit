import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_1_4372)">
        <path
          d="M24 11.7294C24 5.25152 18.6274 6.10352e-05 12 6.10352e-05C5.37264 6.10352e-05 0 5.25152 0 11.7294C0 11.8199 0.00125523 11.91 0.0032636 12.0001C0.00125523 12.0901 0 12.1802 0 12.2707C0 18.7486 5.37264 24.0001 12 24.0001C18.6274 24.0001 24 18.7486 24 12.2707C24 12.1802 23.9987 12.0901 23.9967 12.0001C23.9987 11.91 24 11.8199 24 11.7294Z"
          fill="white"
        />
        <path
          d="M7.18616 12.1421L11.9985 10.0041V4.3371L7.18616 12.1421Z"
          fill="#1263F1"
        />
        <path
          d="M11.9984 4.33698V10.004L16.811 12.1419L11.9984 4.33698Z"
          fill="#1263F1"
          fillOpacity="0.48"
        />
        <path
          d="M11.9984 10.0042V14.9226L16.811 12.1422L11.9984 10.0042Z"
          fill="#1263F1"
          fillOpacity="0.32"
        />
        <path
          d="M7.18616 13.0338L11.9985 19.6625V15.8128L7.18616 13.0338Z"
          fill="#1263F1"
        />
        <path
          d="M11.9984 15.8128V19.6625L16.8139 13.0338L11.9984 15.8128Z"
          fill="#1263F1"
          fillOpacity="0.48"
        />
        <path
          d="M7.18616 12.1422L11.9985 14.9226V10.0042L7.18616 12.1422Z"
          fill="#1263F1"
          fillOpacity="0.82"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4372">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
