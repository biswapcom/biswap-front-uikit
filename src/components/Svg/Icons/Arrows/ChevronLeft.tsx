import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2071 7.29289C13.8166 6.90237 13.1834 6.90237 12.7929 7.29289L8.79289 11.2929C8.40237 11.6834 8.40237 12.3166 8.79289 12.7071L12.7929 16.7071C13.1834 17.0976 13.8166 17.0976 14.2071 16.7071C14.5976 16.3166 14.5976 15.6834 14.2071 15.2929L10.9142 12L14.2071 8.70711C14.5976 8.31658 14.5976 7.68342 14.2071 7.29289Z"
      />
    </Svg>
  );
};

export default Icon;
