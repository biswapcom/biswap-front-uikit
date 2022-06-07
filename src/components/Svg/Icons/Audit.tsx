import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#2E7AFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0001 9C19.9014 8.99999 19.8026 9.02267 19.7118 9.06803L10.6508 13.5986C10.4432 13.7023 10.3074 13.9097 10.2954 14.1415C10.2885 14.2734 10.1395 17.4144 11.2095 21.061C11.8426 23.2186 12.7738 25.1031 13.9773 26.6621C15.4939 28.6268 17.4431 30.072 19.7708 30.9579C19.8447 30.9859 19.9223 31 20.0001 31C20.0001 31 20.0001 31 20.0001 31V9Z"
        fill="white"
      />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.3492 13.5986C29.5568 13.7023 29.6926 13.9097 29.7046 14.1415C29.7115 14.2734 29.8605 17.4144 28.7905 21.061C28.1574 23.2186 27.2262 25.1031 26.0228 26.6621C24.5062 28.6268 22.5569 30.0721 20.2292 30.9579C20.1553 30.9859 20.0777 31 20 31V9C20.0987 9.00002 20.1975 9.0227 20.2882 9.06803L29.3492 13.5986Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
