import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0001 18C17.6096 18.3905 16.9764 18.3905 16.5859 18L6.00008 7.41417C5.60955 7.02364 5.60955 6.39048 6.00008 5.99995C6.3906 5.60943 7.02376 5.60943 7.41429 5.99995L18.0001 16.5857C18.3906 16.9763 18.3906 17.6094 18.0001 18Z"
      />
    </Svg>
  );
};

export default Icon;
