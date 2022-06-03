import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3C8.44771 3 8 3.44772 8 4V8H4.98231C4.5331 8 4.13902 8.29954 4.01879 8.73236L2 16V21H22V16L19.9812 8.73236C19.861 8.29954 19.4669 8 19.0177 8H16V4C16 3.44772 15.5523 3 15 3H9ZM5.43836 9.6H8V11C8 11.1422 8.02969 11.2775 8.08322 11.4H6.8C6.35817 11.4 6 11.7582 6 12.2C6 12.6419 6.35817 13 6.8 13H17.2C17.6418 13 18 12.6419 18 12.2C18 11.7582 17.6418 11.4 17.2 11.4H15.9168C15.9703 11.2775 16 11.1422 16 11V9.6H18.5616L19.895 14.4H4.10503L5.43836 9.6Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
