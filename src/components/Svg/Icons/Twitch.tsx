import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00732 5.65294V14.9274H7.20121V16.6668H8.9451L10.6862 14.9268H13.3001L16.7857 11.4502V3.3335H4.87788L4.00732 5.65294ZM6.03955 4.49183H15.624V10.869L13.5907 12.8979H10.3957L8.65455 14.6352V12.8979H6.03955V4.49183ZM9.23496 6.81239H10.3961V10.2902H9.23496V6.81239ZM13.59 6.81239H12.4283V10.2902H13.59V6.81239Z"
      />
    </Svg>
  );
};

export default Icon;
