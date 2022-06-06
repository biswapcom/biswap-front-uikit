import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3C2.89543 3 2 3.89543 2 5V7C2 8.10457 2.89543 9 4 9H6C7.10457 9 8 8.10457 8 7V5C8 3.89543 7.10457 3 6 3H4ZM13.5 4.5C12.6716 4.5 12 5.17157 12 6C12 6.82843 12.6716 7.5 13.5 7.5H20.5C21.3284 7.5 22 6.82843 22 6C22 5.17157 21.3284 4.5 20.5 4.5H13.5ZM2 17C2 15.8954 2.89543 15 4 15H6C7.10457 15 8 15.8954 8 17V19C8 20.1046 7.10457 21 6 21H4C2.89543 21 2 20.1046 2 19V17ZM13.5 16.5C12.6716 16.5 12 17.1716 12 18C12 18.8284 12.6716 19.5 13.5 19.5H20.5C21.3284 19.5 22 18.8284 22 18C22 17.1716 21.3284 16.5 20.5 16.5H13.5Z"
      />
    </Svg>
  );
};

export default Icon;
