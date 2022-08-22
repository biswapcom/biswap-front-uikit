import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.87219V20.0786H7.23672V22.9306H10.096L12.9507 20.0777H17.2365L22.9514 14.3773V1.06921H3.42737L2 4.87219ZM5.33204 2.96842H21.0468V13.4246L17.7129 16.7511H12.4743L9.61961 19.5995V16.7511H5.33204V2.96842ZM10.5713 6.77342H12.475V12.4756H10.5713V6.77342ZM17.7118 6.77342H15.8071V12.4756H17.7118V6.77342Z"
      />
    </Svg>
  );
};

export default Icon;
