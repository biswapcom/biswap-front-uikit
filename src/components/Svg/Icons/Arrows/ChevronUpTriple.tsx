import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1L18.5621 6.01512C19.0652 6.39965 19.1468 7.10101 18.7443 7.58167C18.3418 8.06232 17.6076 8.14025 17.1045 7.75573L12 3.8546L6.89551 7.75573C6.39237 8.14025 5.6582 8.06232 5.25569 7.58167C4.85319 7.10101 4.93476 6.39965 5.4379 6.01512L12 1Z"
      />
      <path
        opacity="0.56"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8L18.5621 13.7316C19.0652 14.171 19.1468 14.9726 18.7443 15.5219C18.3418 16.0712 17.6076 16.1603 17.1045 15.7208L12 11.2624L6.89551 15.7208C6.39237 16.1603 5.6582 16.0712 5.25569 15.5219C4.85319 14.9726 4.93476 14.171 5.4379 13.7316L12 8Z"
      />
      <path
        opacity="0.32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16L18.5621 21.0151C19.0652 21.3996 19.1468 22.101 18.7443 22.5817C18.3418 23.0623 17.6076 23.1403 17.1045 22.7557L12 18.8546L6.89551 22.7557C6.39237 23.1403 5.6582 23.0623 5.25569 22.5817C4.85319 22.101 4.93476 21.3996 5.4379 21.0151L12 16Z"
      />
    </Svg>
  );
};

export default Icon;
