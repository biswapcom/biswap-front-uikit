import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10.2071 17.2071C9.81658 17.5976 9.18342 17.5976 8.79289 17.2071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L8.79289 6.79289C9.18342 6.40237 9.81658 6.40237 10.2071 6.79289C10.5976 7.18342 10.5976 7.81658 10.2071 8.20711L7.41421 11H19.0625C19.5803 11 20 11.4477 20 12C20 12.5523 19.5803 13 19.0625 13H7.41421L10.2071 15.7929C10.5976 16.1834 10.5976 16.8166 10.2071 17.2071Z" />
    </Svg>
  );
};

export default Icon;
