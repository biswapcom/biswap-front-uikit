import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37259 24 0 18.6274 0 12C0 5.37259 5.37259 0 12 0C18.6274 0 24 5.37259 24 12ZM8.59957 16.7751H6.27071C5.78137 16.7751 5.53962 16.7751 5.39221 16.6808C5.23304 16.5776 5.13574 16.4067 5.12394 16.218C5.11512 16.0441 5.23597 15.8318 5.47771 15.4073L11.228 5.27169C11.4726 4.84129 11.5965 4.6261 11.7527 4.5465C11.9207 4.46103 12.1212 4.46103 12.2892 4.5465C12.4455 4.6261 12.5693 4.84129 12.814 5.27169L13.9961 7.33525L14.0021 7.34578C14.2664 7.80753 14.4004 8.04167 14.4589 8.28742C14.5237 8.55568 14.5237 8.83868 14.4589 9.10694C14.4 9.35458 14.2673 9.59043 13.999 10.0592L10.9786 15.3985L10.9707 15.4122C10.7047 15.8777 10.5699 16.1136 10.3831 16.2917C10.1797 16.4863 9.935 16.6277 9.66673 16.7073C9.42206 16.7751 9.14789 16.7751 8.59957 16.7751ZM14.4807 16.7754H17.8178C18.3101 16.7754 18.5577 16.7754 18.7051 16.6781C18.8643 16.5749 18.9645 16.401 18.9734 16.2124C18.9819 16.0442 18.8637 15.8401 18.6319 15.4403C18.624 15.4267 18.616 15.4128 18.6078 15.3987L16.9364 12.5392L16.9173 12.5071C16.6824 12.1098 16.5638 11.9093 16.4116 11.8317C16.2436 11.7462 16.0461 11.7462 15.8781 11.8317C15.7247 11.9113 15.6009 12.1206 15.3563 12.5422L13.6907 15.4017L13.685 15.4115C13.4411 15.8324 13.3193 16.0427 13.3281 16.2153C13.3399 16.404 13.4371 16.5779 13.5964 16.6811C13.7408 16.7754 13.9884 16.7754 14.4807 16.7754Z"
      />
    </Svg>
  );
};

export default Icon;