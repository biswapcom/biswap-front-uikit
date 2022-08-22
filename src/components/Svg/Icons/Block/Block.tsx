import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3288 19.7429C16.6049 21.1536 14.4013 22 12 22C6.47715 22 2 17.5228 2 12C2 9.59871 2.84638 7.3951 4.25709 5.67123L18.3288 19.7429ZM19.743 18.3287L5.67131 4.25702C7.39517 2.84635 9.59875 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4013 21.1536 16.6048 19.743 18.3287ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
      />
    </Svg>
  );
};

export default Icon;
