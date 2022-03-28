import React from "react";
import Svg from "../Svg";
import {SvgProps} from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#1263F1"/>
      <circle opacity="0.48" cx="20" cy="20" r="12" fill="white"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.8928 16.1071L17.75 12.25L17.75 14.1783C14.5357 14.1784 11.9643 16.107 11.9643 21.2499C13.25 19.3214 14.5357 18.0354 17.75 18.0354L17.75 19.9643L22.8928 16.1071Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1072 24.3929L22.25 28.25L22.25 26.3217C25.4643 26.3216 28.0357 24.393 28.0357 19.2501C26.75 21.1786 25.4643 22.4646 22.25 22.4646L22.25 20.5357L17.1072 24.3929Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
