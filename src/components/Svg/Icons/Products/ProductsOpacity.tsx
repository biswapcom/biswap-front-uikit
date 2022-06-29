import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="1" y="1" width="8" height="8" rx="4" />
      <rect opacity="0.48" x="1" y="15" width="8" height="8" rx="1" />
      <rect opacity="0.48" x="15" y="1" width="8" height="8" rx="1" />
      <rect opacity="0.48" x="15" y="15" width="8" height="8" rx="1" />
    </Svg>
  );
};

export default Icon;
