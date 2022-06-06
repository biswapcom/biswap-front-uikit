import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M2 20H12C12.55 20 13 19.55 13 19C13 18.45 12.55 18 12 18H2C1.45 18 1 18.45 1 19C1 19.55 1.45 20 2 20ZM2 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM5 5C5 5.55 5.45 6 6 6H22C22.55 6 23 5.55 23 5C23 4.45 22.55 4 22 4H6C5.45 4 5 4.45 5 5Z" />
    </Svg>
  );
};

export default Icon;
