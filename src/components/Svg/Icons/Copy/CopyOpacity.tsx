import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect opacity="0.48" x="2" y="5" width="16" height="18" rx="2" />
      <rect x="5" y="1" width="17" height="19" rx="2" />
    </Svg>
  );
};

export default Icon;
