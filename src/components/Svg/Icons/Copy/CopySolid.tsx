
import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect x="6" y="1" width="16" height="18" rx="2"/>
        <path opacity="0.48" fill-rule="evenodd" clip-rule="evenodd" d="M4 6C2.89543 6 2 6.89543 2 8V19C2 21.2091 3.79086 23 6 23H15C16.1046 23 17 22.1046 17 21V20.7324C16.7058 20.9026 16.3643 21 16 21H7C5.34315 21 4 19.6569 4 18V6Z"/>
    </Svg>
  );
};

export default Icon;
