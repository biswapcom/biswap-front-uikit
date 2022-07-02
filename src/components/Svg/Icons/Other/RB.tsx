import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12.9989" cy="12" r="12" fill="#1263F1" />
      <path
        d="M10.3024 23.6954L13.9011 11.1V7.49999L16.2525 0.445679C21.3002 1.86321 25.0011 6.49941 25.0011 12C25.0011 18.6274 19.6285 24 13.0011 24C12.0732 24 11.1698 23.8947 10.3024 23.6954Z"
        fill="#F93B5D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6819 0.301025L5.80005 14.7771H11.9715L9.64874 23.5261C10.0046 23.6294 10.3673 23.7166 10.736 23.787L20.6115 9.83993H14.4401L16.7685 0.603966C16.4133 0.48656 16.0509 0.38529 15.6819 0.301025Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
