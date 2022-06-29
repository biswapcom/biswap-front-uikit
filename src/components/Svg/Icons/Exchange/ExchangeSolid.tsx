import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9.74996 4.25L14.8928 8.10714L9.74996 11.9643V10.0354C6.53567 10.0354 5.24996 11.3214 3.96425 13.2499C3.96425 8.10705 6.53566 6.17838 9.74996 6.17826V4.25ZM14.25 20.25L9.10718 16.3929L14.25 12.5357V14.4646C17.4643 14.4646 18.75 13.1786 20.0357 11.2501C20.0357 16.393 17.4643 18.3216 14.25 18.3217L14.25 20.25Z"
      />
    </Svg>
  );
};

export default Icon;
