import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.0952 9.78332C23.8348 10.7877 23.8348 13.2985 22.0952 14.3029L5.8369 23.6896C4.09732 24.694 1.92286 23.4385 1.92286 21.4298L1.92286 2.65634C1.92286 0.647655 4.09732 -0.607772 5.8369 0.396571L22.0952 9.78332Z" />
    </Svg>
  );
};

export default Icon;
