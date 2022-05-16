import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 15" fill="none" {...props}>
      <mask id="mask0_12568_69596" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
        <circle cx="7.80957" cy="7.90454" r="7" fill="#C4C4C4"/>
      </mask>
      <g mask="url(#mask0_12568_69596)">
        <path d="M19.4759 0.904541H-3.85742V14.9045H19.4759V0.904541Z" fill="black"/>
        <path d="M19.4759 5.57129H-3.85742V14.9046H19.4759V5.57129Z" fill="#DD0000"/>
        <path d="M19.4759 10.2378H-3.85742V14.9044H19.4759V10.2378Z" fill="#FFCE00"/>
      </g>
    </Svg>
  );
};

export default Icon;
