import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect opacity="0.48" width="24" height="24" rx="12" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071L12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929L11.4142 12L13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289Z"
      />
    </Svg>
  );
};

export default Icon;
