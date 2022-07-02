import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29289 14.2071C6.90237 13.8166 6.90237 13.1834 7.29289 12.7929L11.2929 8.79289C11.6834 8.40237 12.3166 8.40237 12.7071 8.79289L16.7071 12.7929C17.0976 13.1834 17.0976 13.8166 16.7071 14.2071C16.3166 14.5976 15.6834 14.5976 15.2929 14.2071L12 10.9142L8.70711 14.2071C8.31658 14.5976 7.68342 14.5976 7.29289 14.2071Z"
      />
    </Svg>
  );
};

export default Icon;
