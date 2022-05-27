import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V11H16.5C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13H13V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V13H7.5C6.94772 13 6.5 12.5523 6.5 12C6.5 11.4477 6.94772 11 7.5 11H11V7.5C11 6.94772 11.4477 6.5 12 6.5Z"/>
    </Svg>
  );
};

export default Icon;
