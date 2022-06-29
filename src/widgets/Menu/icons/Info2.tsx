import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM8 10C7.44772 10 7 10.4477 7 11V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V11C9 10.4477 8.55228 10 8 10ZM11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V8ZM16 13C15.4477 13 15 13.4477 15 14V16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16V14C17 13.4477 16.5523 13 16 13Z"
      />
    </Svg>
  );
};

export default Icon;
