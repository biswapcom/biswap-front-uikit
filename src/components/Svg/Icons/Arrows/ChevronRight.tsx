import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289Z"
      />
    </Svg>
  );
};

export default Icon;
