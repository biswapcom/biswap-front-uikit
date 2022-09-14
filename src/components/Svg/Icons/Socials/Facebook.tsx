import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5583 19.0348C15.8787 18.2949 19.1667 14.5314 19.1667 10C19.1667 4.9374 15.0626 0.833344 9.99999 0.833344C4.93738 0.833344 0.833328 4.9374 0.833328 10C0.833328 14.5634 4.16791 18.348 8.53334 19.05V12.5667H6.24167V10H8.53334V7.98337C8.53334 5.6917 10 4.40837 12.1083 4.40837C12.75 4.40837 13.4833 4.50003 14.125 4.5917V6.9292H12.9333C11.8333 6.9292 11.5583 7.4792 11.5583 8.21253V10H13.9875L13.575 12.5667H11.5583V19.0348Z"
        fill="#749BD8"
      />
    </Svg>
  );
};

export default Icon;
