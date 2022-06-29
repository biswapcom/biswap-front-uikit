import styled from "styled-components";
import { variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { InputProps, scales } from "./types";

const Input = styled.input<InputProps>`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: 0;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  min-width: ${({ minWidth }) => minWidth || "0"};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  opacity: ${({ disabled }) => (disabled ? ".56" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};
  transition: border-color 0.4s ease, background-color 0.4s ease,
    color 0.4s ease;

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    prop: "variant",
    variants: styleVariants,
  })}
`;

Input.defaultProps = {
  scale: scales.MD,
  isError: false,
  isWarning: false,
};

export default Input;
