import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { styleVariants, scaleVariants } from "./theme";
import Text from "../Text/Text";
import { LinkProps } from "./types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  opacity: ${({ disabled }) => disabled ? '0.32' : '1'};
  transition: color 0.4s ease-in-out;

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  
  svg {
    color: inherit;
    transition: fill .4s ease-in-out;
  }
`;

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" bold {...internalProps} {...props}/>;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
