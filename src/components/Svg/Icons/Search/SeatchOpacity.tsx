import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16ZM9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z" fill-opacity="0.48"/>
        <path d="M14.7618 16.1761C15.2868 15.7617 15.7617 15.2868 16.1761 14.7618L22.7071 21.2929C23.0977 21.6834 23.0977 22.3166 22.7071 22.7071C22.3166 23.0977 21.6834 23.0977 21.2929 22.7071L14.7618 16.1761Z"/>
    </Svg>
  );
};

export default Icon;
