import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_5396_36343)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0L12.6872 3.93837C13.0466 4.24034 13.1049 4.79112 12.8174 5.16858C12.5299 5.54604 12.0054 5.60724 11.6461 5.30527L8 2.24171L4.35394 5.30527C3.99455 5.60724 3.47015 5.54604 3.18264 5.16858C2.89513 4.79112 2.9534 4.24034 3.31278 3.93837L8 0Z"
        />
        <path
          opacity="0.56"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 5.25146L12.6872 9.18984C13.0466 9.49181 13.1049 10.0426 12.8174 10.42C12.5299 10.7975 12.0054 10.8587 11.6461 10.5567L8 7.49318L4.35394 10.5567C3.99455 10.8587 3.47015 10.7975 3.18264 10.42C2.89513 10.0426 2.9534 9.49181 3.31278 9.18984L8 5.25146Z"
        />
        <path
          opacity="0.32"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 10.5029L12.6872 14.4413C13.0466 14.7433 13.1049 15.2941 12.8174 15.6715C12.5299 16.049 12.0054 16.1102 11.6461 15.8082L8 12.7446L4.35394 15.8082C3.99455 16.1102 3.47015 16.049 3.18264 15.6715C2.89513 15.2941 2.9534 14.7433 3.31278 14.4413L8 10.5029Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_5396_36343">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
