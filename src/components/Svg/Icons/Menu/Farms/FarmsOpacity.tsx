import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3C3 2.44772 3.44772 2 4 2H13C13.5523 2 14 2.44772 14 3V4H13L15 10H3L4 4H3V3ZM6 4L5.22754 9H12.6578L11 4H6Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11C2 10.4477 2.44772 10 3 10H15L20.2827 10.7547C21.268 10.8954 21.9999 11.7393 21.9999 12.7346V15.256C21.5308 15.0902 21.0259 15 20.5 15C18.1837 15 16.2762 16.75 16.0275 19H11.8261C11.9398 18.5185 12 18.0163 12 17.5C12 13.9101 9.08985 11 5.5 11C4.21136 11 3.0103 11.375 2 12.0218V11Z"
      />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 23C8.53757 23 11 20.5376 11 17.5C11 14.4624 8.53757 12 5.5 12C2.46243 12 0 14.4624 0 17.5C0 20.5376 2.46243 23 5.5 23Z"
      />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 23C22.433 23 24 21.433 24 19.5C24 17.567 22.433 16 20.5 16C18.567 16 17 17.567 17 19.5C17 21.433 18.567 23 20.5 23Z"
      />
    </Svg>
  );
};

export default Icon;
