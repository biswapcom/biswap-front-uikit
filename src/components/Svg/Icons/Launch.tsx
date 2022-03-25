import React from "react";
import Svg from "../Svg";
import {SvgProps} from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#1263F1"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3178 9.40189C15.5819 11.6818 14 15.0592 14 18.6205V26H26V18.6205C26 15.0592 24.4181 11.6818 21.6822 9.4019L20.6402 8.53354C20.2693 8.2245 19.7307 8.2245 19.3598 8.53354L18.3178 9.40189ZM20 17C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13C18.8954 13 18 13.8954 18 15C18 16.1046 18.8954 17 20 17Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M10 25.5822C10 23.9997 10.8941 22.5529 12.3096 21.8452L14 21V26H10.4178C10.1871 26 10 25.8129 10 25.5822Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M30 25.5822C30 23.9997 29.1059 22.5529 27.6904 21.8452L26 21V26H29.5822C29.8129 26 30 25.8129 30 25.5822Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M17 28H23C23 29.2495 22.3755 30.4163 21.3359 31.1094L20 32L18.6641 31.1094C17.6245 30.4163 17 29.2495 17 28Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
