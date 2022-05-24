import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"/>
      <path
        d="M8 5L8 8M8 8L5 8M8 8L8 11M8 8L11 8"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Icon;
