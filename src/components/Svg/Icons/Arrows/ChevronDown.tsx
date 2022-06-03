import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29289 9.79289C6.90237 10.1834 6.90237 10.8166 7.29289 11.2071L11.2929 15.2071C11.6834 15.5976 12.3166 15.5976 12.7071 15.2071L16.7071 11.2071C17.0976 10.8166 17.0976 10.1834 16.7071 9.79289C16.3166 9.40237 15.6834 9.40237 15.2929 9.79289L12 13.0858L8.70711 9.79289C8.31658 9.40237 7.68342 9.40237 7.29289 9.79289Z"
      />
    </Svg>
  );
};

export default Icon;
