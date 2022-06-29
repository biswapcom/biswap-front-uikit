import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        opacity="0.48"
        d="M1 4C1 2.89543 1.89543 2 3 2H18.8571C20.0406 2 21 2.95939 21 4.14286V6H3C1.89543 6 1 5.10457 1 4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4C1 5.10457 1.89543 6 3 6L21 6C22.1046 6 23 6.89543 23 8V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V4ZM21 14C21 15.1046 20.1046 16 19 16C17.8954 16 17 15.1046 17 14C17 12.8954 17.8954 12 19 12C20.1046 12 21 12.8954 21 14Z"
      />
    </Svg>
  );
};

export default Icon;
