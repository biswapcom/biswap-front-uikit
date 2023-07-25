import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_11573_34525)">
        <path d="M24 11.7293C24 5.25146 18.6274 0 12 0C5.37264 0 0 5.25146 0 11.7293C0 11.8199 0.00125523 11.9099 0.0032636 12C0.00125523 12.0901 0 12.1801 0 12.2707C0 18.7485 5.37264 24 12 24C18.6274 24 24 18.7485 24 12.2707C24 12.1801 23.9987 12.0901 23.9967 12C23.9987 11.9099 24 11.8199 24 11.7293Z" />
        <path
          d="M7.18628 12.142L11.9986 10.004V4.33704L7.18628 12.142Z"
          fill="white"
        />
        <path
          d="M11.9985 4.33691V10.0039L16.8112 12.1419L11.9985 4.33691Z"
          fill="white"
          fillOpacity="0.48"
        />
        <path
          d="M11.9985 10.0042V14.9226L16.8112 12.1421L11.9985 10.0042Z"
          fill="white"
          fillOpacity="0.32"
        />
        <path
          d="M7.18628 13.0337L11.9986 19.6625V15.8127L7.18628 13.0337Z"
          fill="white"
        />
        <path
          d="M11.9985 15.8127V19.6625L16.8141 13.0337L11.9985 15.8127Z"
          fill="white"
          fillOpacity="0.48"
        />
        <path
          d="M7.18628 12.1421L11.9986 14.9226V10.0042L7.18628 12.1421Z"
          fill="white"
          fillOpacity="0.82"
        />
      </g>
      <defs>
        <clipPath id="clip0_11573_34525">
          <rect width="100%" height="100%" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
