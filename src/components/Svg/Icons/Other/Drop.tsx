import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.09481 9.28434C7.67893 5.78931 10.6554 1.68494 11.9821 0.0223341L11.9999 0L12.0178 0.0223341C13.3445 1.68494 16.3209 5.78931 17.905 9.28434C19.9031 13.6927 20.4383 16.5617 18.2618 19.8155C16.5282 22.4073 13.3772 23.0174 11.9999 22.9996C10.6226 23.0174 7.47169 22.4073 5.73801 19.8155C3.56151 16.5617 4.09671 13.6927 6.09481 9.28434ZM15.9782 9.24934C16.8107 10.4972 18.3688 13.5948 17.9406 16.5617C17.471 19.8155 15.2289 21.0051 14.0157 21.0051C13.3369 21.0051 12.2674 20.7952 12.981 19.7805C13.6946 18.7659 15.0505 16.8066 15.5143 15.3371C15.9782 13.8677 16.442 12.0483 15.9782 9.24934Z"
      />
    </Svg>
  );
};

export default Icon;