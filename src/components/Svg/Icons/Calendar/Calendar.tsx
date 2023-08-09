import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_21_26199)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.65906 0.751648C5.65906 0.337434 5.32327 0.00164795 4.90906 0.00164795C4.49484 0.00164795 4.15906 0.337434 4.15906 0.751648V1.6141H3.75C1.67893 1.6141 0 3.29304 0 5.36411V14.25C0 16.3211 1.67893 18 3.75 18H14.25C16.3211 18 18 16.3211 18 14.25V5.3641C18 3.29304 16.3211 1.6141 14.25 1.6141H13.8409V0.751648C13.8409 0.337434 13.5052 0.00164795 13.0909 0.00164795C12.6767 0.00164795 12.3409 0.337434 12.3409 0.751648V1.6141H5.65906V0.751648ZM3.75 3.1141H4.15906V4.20132C4.15906 4.61553 4.49484 4.95132 4.90906 4.95132C5.32327 4.95132 5.65906 4.61553 5.65906 4.20132V3.1141H12.3409V4.20132C12.3409 4.61553 12.6767 4.95132 13.0909 4.95132C13.5052 4.95132 13.8409 4.61553 13.8409 4.20132V3.1141H14.25C15.4926 3.1141 16.5 4.12146 16.5 5.3641V7.55914C12.1808 7.55914 5.78593 7.55911 1.5 7.55911V5.36411C1.5 4.12146 2.50736 3.1141 3.75 3.1141ZM1.5 9.24609V14.25C1.5 15.4927 2.50736 16.5 3.75 16.5H14.25C15.4926 16.5 16.5 15.4927 16.5 14.25V9.24606C12.1591 9.24606 5.95994 9.24609 1.5 9.24609Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_26199">
          <rect width="18" height="18" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;