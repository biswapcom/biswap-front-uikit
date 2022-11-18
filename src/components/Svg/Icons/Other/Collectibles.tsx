import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V15C3 16.3062 3.83481 17.4175 5 17.8293V6C5 4.89543 5.89543 4 7 4H16.8293C16.4175 2.83481 15.3062 2 14 2H6Z" fill="#749BD8"/>
        <rect x="7" y="6" width="14" height="16" rx="2" fill="white"/>
        <path d="M14 18C16.2091 18 18 16.2091 18 14C18 11.7909 16.2091 10 14 10C11.7909 10 10 11.7909 10 14C10 16.2091 11.7909 18 14 18Z" fill="white"/>
        <path d="M17.0986 11.5052C16.8212 11.5601 16.5566 11.6375 16.3389 11.6859C15.8421 11.7972 15.3776 12.1778 15.276 12.8746C15.1857 13.4972 15.3953 13.7649 15.3034 14.4891C15.1421 15.7536 13.9292 16.1891 13.3631 16.4536C13.0357 16.6052 12.2405 16.9536 11.6276 17.2198C12.2921 17.7101 13.1115 18.0004 14.0002 18.0004C16.2099 18.0004 18.0002 16.2101 18.0002 14.0004C18.0002 13.0585 17.6744 12.1923 17.1292 11.5101C17.1195 11.5085 17.1099 11.5069 17.0986 11.5052Z" fill="url(#paint0_linear_6240_35174)"/>
        <path d="M13.55 13.4129C13.8581 12.7468 13.7468 12.7452 13.9806 12.1194C14.2758 11.3258 15.1935 11.5516 15.4468 11.5855C15.8645 11.6419 15.9742 11.4935 16.8548 11.3516C16.8984 11.3452 16.9403 11.3387 16.9823 11.3339C16.25 10.5161 15.1855 10 14 10C12.4081 10 11.0339 10.929 10.3903 12.2758C11.7097 12.6032 13.1339 13.3145 13.55 13.4129ZM12.6758 10.6968C12.7919 10.7145 13.3564 11.4161 13.4629 13.2177C13.4629 13.2177 12.7371 13.0435 12.5806 12.6693C12.4516 12.3613 12.6194 11.9564 12.6758 10.6968ZM17.1226 11.5016C17.1242 11.5048 17.1274 11.5064 17.129 11.5097C17.1193 11.5081 17.1081 11.5081 17.0984 11.5064C17.1064 11.5032 17.1145 11.5032 17.1226 11.5016ZM10 14C10 13.6806 10.0371 13.371 10.1081 13.0742C10.2532 13.1952 10.4081 13.329 10.5726 13.4823C11.6145 14.4484 13.3097 15.2113 13.9274 14.5016C13.929 14.5032 13.9306 14.5032 13.9306 14.5048C13.8177 14.6532 13.3871 15.1226 12.5645 14.9774L11.2645 16.9177C10.4871 16.1887 10 15.1516 10 14Z" fill="url(#paint1_linear_6240_35174)"/>
        <defs>
          <linearGradient id="paint0_linear_6240_35174" x1="16.4024" y1="12.5529" x2="15.4587" y2="17.7517" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF496A"/>
            <stop offset="1" stopColor="#E42648"/>
          </linearGradient>
          <linearGradient id="paint1_linear_6240_35174" x1="11.9307" y1="15.8922" x2="14.0172" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0.00181229" stopColor="#1158F1"/>
            <stop offset="1" stopColor="#119BED"/>
          </linearGradient>
        </defs>
    </Svg>
  );
};

export default Icon;
