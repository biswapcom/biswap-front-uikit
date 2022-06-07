import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#1263F1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 22C23.3137 22 26 19.3137 26 16C26 12.6863 23.3137 10 20 10C16.6863 10 14 12.6863 14 16C14 19.3137 16.6863 22 20 22Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 16C28 20.4183 24.4183 24 20 24C15.5817 24 12 20.4183 12 16C12 11.5817 15.5817 8 20 8C24.4183 8 28 11.5817 28 16ZM27 16C27 19.866 23.866 23 20 23C16.134 23 13 19.866 13 16C13 12.134 16.134 9 20 9C23.866 9 27 12.134 27 16Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M12 22L8 23L10.3945 24L13 23L12 22Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M28 22L32 23L29.6055 24L27 23L28 22Z"
        fill="white"
      />
      <path opacity="0.48" d="M10 27L8 23L20 28V32L10 27Z" fill="white" />
      <path opacity="0.48" d="M30 27L32 23L20 28V32L30 27Z" fill="white" />
    </Svg>
  );
};

export default Icon;
