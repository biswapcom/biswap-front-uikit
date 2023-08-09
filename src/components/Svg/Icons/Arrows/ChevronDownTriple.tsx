import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23L5.4379 17.9849C4.93476 17.6004 4.85319 16.899 5.25569 16.4183C5.6582 15.9377 6.39237 15.8597 6.89551 16.2443L12 20.1454L17.1045 16.2443C17.6076 15.8597 18.3418 15.9377 18.7443 16.4183C19.1468 16.899 19.0652 17.6004 18.5621 17.9849L12 23Z"
      />
      <path
        opacity="0.56"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16L5.4379 10.2684C4.93476 9.82897 4.85319 9.02741 5.2557 8.47809C5.6582 7.92877 6.39237 7.83971 6.89551 8.27916L12 12.7376L17.1045 8.27917C17.6076 7.83971 18.3418 7.92877 18.7443 8.47809C19.1468 9.02741 19.0652 9.82897 18.5621 10.2684L12 16Z"
      />
      <path
        opacity="0.32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8L5.4379 2.98488C4.93476 2.60035 4.85319 1.89898 5.25569 1.41833C5.6582 0.937674 6.39237 0.859744 6.89551 1.24427L12 5.1454L17.1045 1.24427C17.6076 0.859745 18.3418 0.937675 18.7443 1.41833C19.1468 1.89899 19.0652 2.60035 18.5621 2.98488L12 8Z"
      />
    </Svg>
  );
};

export default Icon;