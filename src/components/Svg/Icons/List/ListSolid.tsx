import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2C2.79086 2 1 3.79086 1 6V18C1 20.2091 2.79086 22 5 22H17C19.2091 22 21 20.2091 21 18V6C21 3.79086 19.2091 2 17 2H5ZM6 6C5.44772 6 5 6.44772 5 7C5 7.55229 5.44771 8 6 8H15C15.5523 8 16 7.55229 16 7C16 6.44772 15.5523 6 15 6H6ZM6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H6ZM5 17C5 16.4477 5.44772 16 6 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H6C5.44772 18 5 17.5523 5 17Z"
      />
    </Svg>
  );
};

export default Icon;
