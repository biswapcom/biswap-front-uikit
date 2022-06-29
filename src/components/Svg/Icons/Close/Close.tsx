import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.98959 16.5963C5.59907 16.9868 5.59907 17.6199 5.98959 18.0105C6.38012 18.401 7.01328 18.401 7.40381 18.0105L12 13.4143L16.5962 18.0105C16.9867 18.401 17.6199 18.401 18.0104 18.0105C18.4009 17.6199 18.4009 16.9868 18.0104 16.5963L13.4142 12.0001L18.0104 7.40386C18.4009 7.01334 18.4009 6.38018 18.0104 5.98965C17.6199 5.59913 16.9867 5.59913 16.5962 5.98965L12 10.5858L7.4038 5.98965C7.01328 5.59913 6.38011 5.59913 5.98959 5.98965C5.59907 6.38018 5.59907 7.01334 5.98959 7.40387L10.5858 12.0001L5.98959 16.5963Z"
      />
    </Svg>
  );
};

export default Icon;
