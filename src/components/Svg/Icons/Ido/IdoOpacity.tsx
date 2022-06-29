import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8ZM19 8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8Z"/>
        <path opacity="0.48" d="M4 14L0 15L2.39453 16L5 15L4 14Z" />
        <path opacity="0.48" d="M20 14L24 15L21.6055 16L19 15L20 14Z" />
        <path opacity="0.48" d="M2 19L0 15L12 20V24L2 19Z" />
        <path opacity="0.48" d="M22 19L24 15L12 20V24L22 19Z" />
    </Svg>
  );
};

export default Icon;
