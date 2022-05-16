import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 15" fill="none" {...props}>
      <mask id="mask0_12568_69587" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
        <circle cx="7.96289" cy="7.90454" r="7" fill="#C4C4C4"/>
      </mask>
      <g mask="url(#mask0_12568_69587)">
        <path d="M22.4114 -1.1394H-1.64062V18.3766H22.4114V-1.1394Z" fill="#EE1C25"/>
        <path d="M5.14796 3.573L6.22922 6.90078L3.39844 4.8441H6.89748L4.0667 6.90078L5.14796 3.573Z" fill="#FFFF00"/>
        <path d="M8.45366 3.00872L8.35127 4.17057L7.75119 3.17043L8.82453 3.62684L7.68791 3.88849L8.45366 3.00872Z" fill="#FFFF00"/>
        <path d="M9.87969 4.37244L9.33446 5.4035L9.16952 4.24888L9.98163 5.08603L8.83255 4.88611L9.87969 4.37244Z" fill="#FFFF00"/>
        <path d="M10.0164 6.42843L9.09798 7.14738L9.4184 6.02591L9.81836 7.12154L8.85079 6.47025L10.0164 6.42843Z" fill="#FFFF00"/>
        <path d="M8.43044 7.29169L8.37631 8.45678L7.73528 7.48239L8.82662 7.8939L7.70183 8.20246L8.43044 7.29169Z" fill="#FFFF00"/>
      </g>
    </Svg>
  );
};

export default Icon;
