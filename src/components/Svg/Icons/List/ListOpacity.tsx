import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <rect opacity="0.48" x="2" y="2" width="20" height="20" rx="4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M6 7C6 6.44772 6.44772 6 7 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H7C6.44771 8 6 7.55228 6 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H7Z" />
    </Svg>
  );
};

export default Icon;
