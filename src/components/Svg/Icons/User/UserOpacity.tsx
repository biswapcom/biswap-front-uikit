import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <circle cx="12" cy="6" r="5"/>
        <path opacity="0.48" d="M2 19.6667C2 15.9848 4.98477 13 8.66667 13H15.3333C19.0152 13 22 15.9848 22 19.6667C22 21.5076 20.5076 23 18.6667 23H5.33333C3.49238 23 2 21.5076 2 19.6667Z"/>
    </Svg>
  );
};

export default Icon;
