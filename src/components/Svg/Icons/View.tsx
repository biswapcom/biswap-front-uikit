import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 24 24" stroke='currentColor' fill='currentColor' {...props}>
          <path d="M12 5.70173C7.35887 5.76011 2.80536 10.251 1.19995 12.0388C2.82968 13.8875 7.41725 18.3308 12 18.3016C16.5827 18.2724 21.0486 13.8631 22.8 12.0388C21.0729 10.2023 16.641 5.64335 12 5.70173Z" fill='none' strokeWidth="1.25"/>
          <path d="M16.5913 12.0757C16.5913 14.6524 14.5025 16.7412 11.9258 16.7412C9.34909 16.7412 7.26025 14.6524 7.26025 12.0757C7.26025 9.49899 9.34909 7.41016 11.9258 7.41016C14.5025 7.41016 16.5913 9.49899 16.5913 12.0757Z" fill='none' strokeWidth="1.25"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.686 11.8942C11.351 11.8942 11.89 11.3551 11.89 10.6901C11.89 10.2819 11.6868 9.92107 11.3761 9.70333C11.5645 9.656 11.7617 9.63086 11.9647 9.63086C13.2947 9.63086 14.3729 10.709 14.3729 12.039C14.3729 13.3689 13.2947 14.4471 11.9647 14.4471C10.6348 14.4471 9.55664 13.3689 9.55664 12.039C9.55664 11.791 9.59412 11.5518 9.66373 11.3266C9.87638 11.6674 10.2547 11.8942 10.686 11.8942Z"/>
      </Svg>
  );
};

export default Icon;
