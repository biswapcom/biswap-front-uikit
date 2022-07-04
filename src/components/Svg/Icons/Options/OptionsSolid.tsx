import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.1732 13.078C20.2172 12.726 20.2502 12.374 20.2502 12C20.2502 11.626 20.2172 11.274 20.1732 10.922L22.4942 9.107C22.7032 8.942 22.7582 8.645 22.6262 8.403L20.4262 4.597C20.2942 4.355 19.9972 4.267 19.7552 4.355L17.0162 5.455C16.4442 5.015 15.8282 4.652 15.1572 4.377L14.7392 1.462C14.7062 1.198 14.4752 1 14.2002 1H9.80024C9.52524 1 9.29424 1.198 9.26124 1.462L8.84324 4.377C8.17224 4.652 7.55624 5.026 6.98424 5.455L4.24524 4.355C3.99224 4.256 3.70624 4.355 3.57424 4.597L1.37424 8.403C1.23124 8.645 1.29724 8.942 1.50624 9.107L3.82724 10.922C3.78324 11.274 3.75024 11.637 3.75024 12C3.75024 12.363 3.78324 12.726 3.82724 13.078L1.50624 14.893C1.29724 15.058 1.24224 15.355 1.37424 15.597L3.57424 19.403C3.70624 19.645 4.00324 19.733 4.24524 19.645L6.98424 18.545C7.55624 18.985 8.17224 19.348 8.84324 19.623L9.26124 22.538C9.29424 22.802 9.52524 23 9.80024 23H14.2002C14.4752 23 14.7062 22.802 14.7392 22.538L15.1572 19.623C15.8282 19.348 16.4442 18.974 17.0162 18.545L19.7552 19.645C20.0082 19.744 20.2942 19.645 20.4262 19.403L22.6262 15.597C22.7582 15.355 22.7032 15.058 22.4942 14.893L20.1732 13.078ZM12.0002 15.85C9.87724 15.85 8.15024 14.123 8.15024 12C8.15024 9.877 9.87724 8.15 12.0002 8.15C14.1232 8.15 15.8502 9.877 15.8502 12C15.8502 14.123 14.1232 15.85 12.0002 15.85Z" />
    </Svg>
  );
};

export default Icon;