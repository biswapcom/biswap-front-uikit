import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle opacity="0.48" cx="12" cy="12" r="12" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8928 8.10714L9.74997 4.25L9.74997 6.17826C6.53566 6.17838 3.96425 8.10705 3.96425 13.2499C5.24996 11.3214 6.53567 10.0354 9.74997 10.0354L9.74997 11.9643L14.8928 8.10714Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.10718 16.3929L14.25 20.25L14.25 18.3217C17.4643 18.3216 20.0357 16.393 20.0357 11.2501C18.75 13.1786 17.4643 14.4646 14.25 14.4646L14.25 12.5357L9.10718 16.3929Z"
      />
    </Svg>
  );
};

export default Icon;
