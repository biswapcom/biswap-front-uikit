import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#1263F1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 11C11 10.4477 11.4477 10 12 10H21C21.5523 10 22 10.4477 22 11V12H21L23 18H11L12 12H11V11ZM14 12L13.2275 17H20.6578L19 12H14Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19C10 18.4477 10.4477 18 11 18H23L28.2827 18.7547C29.268 18.8954 29.9999 19.7393 29.9999 20.7346V23.256C29.5308 23.0902 29.0259 23 28.5 23C26.1837 23 24.2762 24.75 24.0275 27H19.8261C19.9398 26.5185 20 26.0163 20 25.5C20 21.9101 17.0899 19 13.5 19C12.2114 19 11.0103 19.375 10 20.0218V19Z"
        fill="white"
      />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 31C16.5376 31 19 28.5376 19 25.5C19 22.4624 16.5376 20 13.5 20C10.4624 20 8 22.4624 8 25.5C8 28.5376 10.4624 31 13.5 31Z"
        fill="white"
      />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 31C30.433 31 32 29.433 32 27.5C32 25.567 30.433 24 28.5 24C26.567 24 25 25.567 25 27.5C25 29.433 26.567 31 28.5 31Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
