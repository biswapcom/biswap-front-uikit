import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.40891 5.40891 0 12 0C18.5911 0 24 5.40891 24 12C24 18.5911 18.5911 24 12 24C5.40891 24 0 18.5911 0 12ZM13.5 7.5C13.5 8.325 12.825 9 12 9C11.175 9 10.5 8.325 10.5 7.5C10.5 6.675 11.175 6 12 6C12.825 6 13.5 6.675 13.5 7.5ZM10.5 12C10.5 11.175 11.175 10.5 12 10.5C12.825 10.5 13.5 11.175 13.5 12C13.5 12.825 12.825 13.5 12 13.5C11.175 13.5 10.5 12.825 10.5 12ZM10.5 16.5C10.5 15.675 11.175 15 12 15C12.825 15 13.5 15.675 13.5 16.5C13.5 17.325 12.825 18 12 18C11.175 18 10.5 17.325 10.5 16.5Z"/>
    </Svg>
  );
};

export default Icon;
