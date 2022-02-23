import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 24 24" {...props}>
          <circle cx="11.999" cy="12.0001" r="10" fill="#1EBB95"/>
          <path d="M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z" fill="#FF1C5E"/>
          <path d="M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z" fill="white"/>
      </Svg>
  );
};

export default Icon;
