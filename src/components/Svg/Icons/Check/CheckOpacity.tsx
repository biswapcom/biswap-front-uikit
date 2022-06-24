import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <circle opacity="0.48" cx="12" cy="12" r="12"/>
        <path d="M17.7212 7.79053C17.3499 7.40303 16.747 7.40328 16.3752 7.79053L10.3174 14.1047L7.62503 11.2985C7.25325 10.911 6.65061 10.911 6.27883 11.2985C5.90706 11.686 5.90706 12.3141 6.27883 12.7016L9.6442 16.2093C9.82998 16.4029 10.0736 16.5 10.3172 16.5C10.5608 16.5 10.8046 16.4032 10.9904 16.2093L17.7212 9.19364C18.0929 8.80641 18.0929 8.17801 17.7212 7.79053Z"/>
    </Svg>
  );
};

export default Icon;
