import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="1" y="1" width="22" height="4" rx="1" />
      <rect x="1" y="7" width="14" height="16" rx="1" />
      <rect x="17" y="7" width="6" height="16" rx="1" />
    </Svg>
  );
};

export default Icon;
