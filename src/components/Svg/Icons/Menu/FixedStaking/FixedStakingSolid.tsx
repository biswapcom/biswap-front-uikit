import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 12C8 13.1046 8.89539 14 10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10C8.89539 10 8 10.8954 8 12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21L3 22C3 22.5523 3.44772 23 4 23H6C6.55228 23 7 22.5523 7 22V21H17V22C17 22.5523 17.4477 23 18 23H20C20.5523 23 21 22.5523 21 22V21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3H3ZM20 5C19.4477 5 19 5.44772 19 6V18C19 18.5523 19.4477 19 20 19C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM9 7C9 6.44775 9.44775 6 10 6C10.5522 6 11 6.44775 11 7V8.12598C12.4056 8.48779 13.5122 9.59436 13.874 11H15C15.5522 11 16 11.4478 16 12C16 12.5522 15.5522 13 15 13H13.874C13.5122 14.4056 12.4056 15.5122 11 15.874V17C11 17.5522 10.5522 18 10 18C9.44775 18 9 17.5522 9 17V15.874C7.59436 15.5122 6.48779 14.4056 6.12598 13H5C4.44775 13 4 12.5522 4 12C4 11.4478 4.44775 11 5 11H6.12598C6.48779 9.59436 7.59436 8.48779 9 8.12598V7Z"
      />
    </Svg>
  );
};

export default Icon;