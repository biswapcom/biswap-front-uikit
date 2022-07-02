import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8H6C7.10457 8 8 7.10457 8 6V4C8 2.89543 7.10457 2 6 2H4ZM18 2C16.8954 2 16 2.89543 16 4V6C16 7.10457 16.8954 8 18 8H20C21.1046 8 22 7.10457 22 6V4C22 2.89543 21.1046 2 20 2H18ZM2 18C2 16.8954 2.89543 16 4 16H6C7.10457 16 8 16.8954 8 18V20C8 21.1046 7.10457 22 6 22H4C2.89543 22 2 21.1046 2 20V18ZM18 16C16.8954 16 16 16.8954 16 18V20C16 21.1046 16.8954 22 18 22H20C21.1046 22 22 21.1046 22 20V18C22 16.8954 21.1046 16 20 16H18Z"
      />
    </Svg>
  );
};

export default Icon;
