import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7L9 17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17L7 7Z" />
      <path d="M12.8299 12L16.7099 15.88C17.0999 16.27 17.0899 16.91 16.7099 17.3C16.3199 17.69 15.6899 17.69 15.2999 17.3L10.7099 12.71C10.3199 12.32 10.3199 11.69 10.7099 11.3L15.2999 6.70998C15.6899 6.31998 16.3199 6.31998 16.7099 6.70998C17.0999 7.09998 17.0999 7.72998 16.7099 8.11998L12.8299 12Z" />
    </Svg>
  );
};

export default Icon;
