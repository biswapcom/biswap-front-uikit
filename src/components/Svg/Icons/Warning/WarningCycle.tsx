import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 160 160" fill="none" {...props}>
      <rect width="160" height="160" rx="80" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M120.726 104.348L85.418 41.2114C82.967 37.3744 77.0336 37.3735 74.582 41.2113L39.2745 104.35L39.1908 104.487C36.9923 108.086 39.4 113.333 44.6736 113.333H115.325C120.596 113.333 123.008 108.087 120.809 104.484L120.726 104.348ZM67.4029 36.9755C73.0861 27.6687 86.9215 27.681 92.5971 36.9755L127.922 100.143C133.724 109.65 126.687 121.667 115.325 121.667H44.6736C33.3019 121.667 26.2775 109.64 32.0795 100.143L67.4029 36.9755Z"
        fill="#FFCD1C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M79.9991 54.9898C82.7566 54.9898 85.0012 57.2344 85.0012 59.9918V85.0021C85.0012 87.7595 82.7566 90.0041 79.9991 90.0041C77.2417 90.0041 74.9971 87.7595 74.9971 85.0021V59.9918C74.9971 57.2344 77.2417 54.9898 79.9991 54.9898ZM74.9971 100.008C74.9971 97.2507 77.2417 95.0062 79.9991 95.0062C82.7566 95.0062 85.0012 97.2507 85.0012 100.008C85.0012 102.766 82.7566 105.01 79.9991 105.01C77.2417 105.01 74.9971 102.766 74.9971 100.008Z"
        fill="#FFCD1C"
      />
    </Svg>
  );
};

export default Icon;
