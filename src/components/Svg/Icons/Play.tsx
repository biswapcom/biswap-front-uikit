import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 23 25" {...props}>
      <path d="M21.0952 9.78332C22.8348 10.7877 22.8348 13.2985 21.0952 14.3029L4.8369 23.6896C3.09732 24.694 0.922856 23.4385 0.922856 21.4298L0.922857 2.65634C0.922857 0.647655 3.09732 -0.607772 4.8369 0.396571L21.0952 9.78332Z"/>
    </Svg>
  );
};

export default Icon;
