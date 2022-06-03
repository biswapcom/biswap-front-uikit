import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <mask
        id="maskBD"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="14"
      >
        <path
          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#maskBD)">
        <path
          d="M-3.13574 0V4.63246V4.73505V9.26495V9.36754V14H18.7883V9.36754V9.26495V4.73505V4.63246V0H-3.13574Z"
          fill="#2B5034"
        />
        <path
          d="M5.54361 9.46399C7.44568 9.46399 8.98761 7.84685 8.98761 5.85199C8.98761 3.85713 7.44568 2.23999 5.54361 2.23999C3.64154 2.23999 2.09961 3.85713 2.09961 5.85199C2.09961 7.84685 3.64154 9.46399 5.54361 9.46399Z"
          fill="#DB0032"
        />
      </g>
    </Svg>
  );
};

export default Icon;
