import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 72 72" {...props}>
      <circle cx="36" cy="36" r="36"/>
      <path d="M48.1 33.7483C49.8333 34.7491 49.8333 37.2509 48.1 38.2517L31.9 47.6047C30.1667 48.6055 28 47.3546 28 45.3531L28 26.6469C28 24.6454 30.1667 23.3945 31.9 24.3953L48.1 33.7483Z" fill="white"/>
    </Svg>
  );
};

export default Icon;
