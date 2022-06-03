import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import ArrowUpForward from "../Svg/Icons/ArrowUpForward";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <ArrowUpForward
        color={props.color ? props.color : "primary"}
        width="16px"
        ml="4px"
      />
    </Link>
  );
};

export default LinkExternal;
