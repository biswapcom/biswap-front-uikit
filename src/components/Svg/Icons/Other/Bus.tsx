import React from 'react';
import Svg from "../../Svg";
import {SvgProps} from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 18" fill="none" {...props}>
      <rect x="0.5" width="21" height="18" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2436_6517" transform="translate(-0.117284 -0.478261) scale(0.000411523 0.00057971)"/>
        </pattern>
      </defs>
    </Svg>

  );
};

export default Icon;