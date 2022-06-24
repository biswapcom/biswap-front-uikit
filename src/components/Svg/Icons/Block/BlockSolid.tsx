import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM16.5859 18C16.9764 18.3905 17.6096 18.3905 18.0001 18C18.3906 17.6095 18.3906 16.9763 18.0001 16.5858L7.41429 6C7.02377 5.60948 6.3906 5.60948 6.00008 6C5.60955 6.39052 5.60955 7.02369 6.00008 7.41421L16.5859 18Z"
      />
    </Svg>
  );
};

export default Icon;
