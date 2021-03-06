import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="2.69995" y="4" width="1.6" height="18" rx="0.8" />
      <path d="M6.30005 4.7758C6.30005 4.46414 6.4773 4.17962 6.75704 4.04223L7.88366 3.48894C9.69996 2.59693 11.8815 2.9489 13.3251 4.36685C14.6668 5.68471 16.658 6.09048 18.4084 5.40276L20.0283 4.76634C20.6392 4.52631 21.3 4.97671 21.3 5.63309V16.0137C21.3 16.4478 21.0343 16.8377 20.6303 16.9965L18.4084 17.8694C16.658 18.5571 14.6668 18.1514 13.3251 16.8335C11.8815 15.4156 9.69996 15.0636 7.88366 15.9556L7.31856 16.2331C6.84886 16.4638 6.30005 16.1219 6.30005 15.5986V4.7758Z" />
    </Svg>
  );
};

export default Icon;
