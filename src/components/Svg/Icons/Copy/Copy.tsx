
import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5 4C5 2.34315 6.34315 1 8 1H19C20.6569 1 22 2.34315 22 4V17C22 18.6569 20.6569 20 19 20H8C6.34315 20 5 18.6569 5 17V4ZM8 3C7.44772 3 7 3.44772 7 4V17C7 17.5523 7.44772 18 8 18H19C19.5523 18 20 17.5523 20 17V4C20 3.44772 19.5523 3 19 3H8Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3.55228 6 4 6.44772 4 7V18C4 19.6569 5.34315 21 7 21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H7C4.23858 23 2 20.7614 2 18V7C2 6.44772 2.44772 6 3 6Z"/>
    </Svg>
  );
};

export default Icon;
