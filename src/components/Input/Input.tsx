import styled, { DefaultTheme } from "styled-components";
import { variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

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
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid transparent;
  transition: border-color .4s ease, background-color .4s ease, color .4s ease;
  
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    prop: "styleColor",
    variants: styleVariants,
  })}
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
