import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <mask id="maskBD" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
        <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#C4C4C4"/>
      </mask>
      <g mask="url(#maskBD)">
        <path d="M4.69028 -0.839966H0V14H4.69028V-0.839966Z" fill="#002395"/>
        <path d="M9.38564 -0.839966H4.69043V14H9.38564V-0.839966Z" fill="#EEEEEE"/>
        <path d="M14.0002 -0.839966H9.38574V14H14.0002V-0.839966Z" fill="#ED2939"/>
      </g>
    </Svg>
  );
};

export default Icon;
