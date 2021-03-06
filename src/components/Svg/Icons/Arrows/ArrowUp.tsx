import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.79289 10.2071C6.40237 9.81658 6.40237 9.18342 6.79289 8.79289L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L17.2071 8.79289C17.5976 9.18342 17.5976 9.81658 17.2071 10.2071C16.8166 10.5976 16.1834 10.5976 15.7929 10.2071L13 7.41421L13 19.0625C13 19.5803 12.5523 20 12 20C11.4477 20 11 19.5803 11 19.0625L11 7.41421L8.20711 10.2071C7.81658 10.5976 7.18342 10.5976 6.79289 10.2071Z" />
    </Svg>
  );
};

export default Icon;
