import styled from "styled-components";
import { variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { InputProps, scales } from "./types";

// interface StyledInputProps extends InputProps {
//   tabindex?: string
// }

// const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
//   switch (scale) {
//     case scales.LG:
//       return "48px";
//     case scales.SM:
//       return "32px";
//     case scales.MD:
//     default:
//       return "40px";
//   }
// };

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
