import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_11573_34525)">
        <path
          opacity="0.48"
          d="M24 11.7293C24 5.25146 18.6274 0 12 0C5.37264 0 0 5.25146 0 11.7293C0 11.8199 0.00125523 11.9099 0.0032636 12C0.00125523 12.0901 0 12.1801 0 12.2707C0 18.7485 5.37264 24 12 24C18.6274 24 24 18.7485 24 12.2707C24 12.1801 23.9987 12.0901 23.9967 12C23.9987 11.9099 24 11.8199 24 11.7293Z"
        />
        <path d="M6.34644 12.1668L11.9984 9.65584V3.00012L6.34644 12.1668Z" />
        <path opacity="0.56" d="M12 3V9.65572L17.6523 12.1667L12 3Z" />
        <path
          opacity="0.56"
          d="M11.9983 9.65601V15.4326L17.6506 12.167L11.9983 9.65601Z"
        />
        <path d="M6.34644 13.2141L11.9984 20.9994V16.478L6.34644 13.2141Z" />
        <path
          opacity="0.56"
          d="M12 16.478V20.9994L17.6557 13.2141L12 16.478Z"
        />
        <path d="M6.34644 12.167L11.9984 15.4326V9.65601L6.34644 12.167Z" />
      </g>
      <defs>
        <clipPath id="clip0_11573_34525">
          <rect width="100%" height="100%" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
