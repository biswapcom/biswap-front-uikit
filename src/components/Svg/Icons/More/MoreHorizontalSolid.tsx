import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.40891 5.40891 0 12 0C18.5911 0 24 5.40891 24 12C24 18.5911 18.5911 24 12 24C5.40891 24 0 18.5911 0 12ZM7.5 10.5C8.325 10.5 9 11.175 9 12C9 12.825 8.325 13.5 7.5 13.5C6.675 13.5 6 12.825 6 12C6 11.175 6.675 10.5 7.5 10.5ZM12 13.5C11.175 13.5 10.5 12.825 10.5 12C10.5 11.175 11.175 10.5 12 10.5C12.825 10.5 13.5 11.175 13.5 12C13.5 12.825 12.825 13.5 12 13.5ZM16.5 13.5C15.675 13.5 15 12.825 15 12C15 11.175 15.675 10.5 16.5 10.5C17.325 10.5 18 11.175 18 12C18 12.825 17.325 13.5 16.5 13.5Z"
      />
    </Svg>
  );
};

export default Icon;
