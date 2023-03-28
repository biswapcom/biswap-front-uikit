import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 14V3C2 1.89543 2.89543 1 4 1C5.10457 1 6 1.89543 6 3V16H4C2.89543 16 2 15.1046 2 14Z" />
      <g opacity="0.48">
        <path d="M7.99997 1H5.49997H4C4.95462 1 5.95021 1.73011 5.99997 3H7.99997V1Z" />
        <path d="M6 3C6 1.89543 6.89543 1 8 1H20C21.1046 1 22 1.89543 22 3V21C22 22.1046 21.1046 23 20 23H8C6.89543 23 6 22.1046 6 21V3Z" />
      </g>
      <path
        d="M9 17.1428V19.9999M15.6641 17.1428V19.9999M19 17.8572V20M12.3359 14.9999L12.3359 19.9999"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M14.8105 11.4672V11.915C14.8105 12.1316 14.6349 12.3072 14.4183 12.3072H13.634C13.4174 12.3072 13.2419 12.1316 13.2419 11.915V11.471C11.6147 11.219 11.0229 10.1947 10.9099 9.47041C10.8877 9.32775 11.006 9.21039 11.1504 9.21039H12.2157C12.3522 9.21039 12.4657 9.31965 12.5338 9.43797C12.6673 9.67005 13.032 9.98458 14.0262 9.98458C15.1085 9.98458 15.5948 9.53168 15.5948 9.21039C15.5948 8.95955 15.5948 8.43619 14.0262 8.43619C11.2968 8.43619 10.8889 6.98071 10.8889 6.11361C10.8889 5.11645 11.696 4.11309 13.2419 3.85683V3.41828C13.2419 3.2017 13.4174 3.02612 13.634 3.02612H14.4183C14.6349 3.02612 14.8105 3.2017 14.8105 3.41828V3.8847C16.0272 4.16869 16.5735 5.09279 16.6751 5.85314C16.6942 5.99626 16.5758 6.11361 16.4314 6.11361H15.9085L15.3805 6.12299C15.2382 6.12552 15.1253 6.01059 15.0774 5.87652C14.9837 5.61461 14.7199 5.33942 14.0262 5.33942C13.0073 5.33942 12.4575 5.7389 12.4575 6.11361C12.4575 6.40316 12.4575 6.88781 14.0262 6.88781C16.7556 6.88781 17.1634 8.34329 17.1634 9.21039C17.1634 10.2076 16.3564 11.2109 14.8105 11.4672Z" />
    </Svg>
  );
};

export default Icon;
