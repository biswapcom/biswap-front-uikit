import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect opacity="0.48" rx="12" transform="matrix(-1 0 0 1 24 0)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929C15.3166 9.90237 14.6834 9.90237 14.2929 10.2929L12 12.5858L9.70711 10.2929C9.31658 9.90237 8.68342 9.90237 8.29289 10.2929Z" fill="#556E9A"/>
    </Svg>
  );
};

export default Icon;
