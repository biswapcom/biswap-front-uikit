import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 9C12.825 9 13.5 8.325 13.5 7.5C13.5 6.675 12.825 6 12 6C11.175 6 10.5 6.675 10.5 7.5C10.5 8.325 11.175 9 12 9ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5ZM12 15C11.175 15 10.5 15.675 10.5 16.5C10.5 17.325 11.175 18 12 18C12.825 18 13.5 17.325 13.5 16.5C13.5 15.675 12.825 15 12 15Z" />
    </Svg>
  );
};

export default Icon;
