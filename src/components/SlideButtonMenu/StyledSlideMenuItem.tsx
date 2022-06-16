import styled  from "styled-components";
import { space, layout, variant } from "styled-system";
import { BaseButtonProps } from "../Button";
import { slideMenuScaleVariants, slideMenuStyleVariants } from "./theme";

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const StyledSlideMenuItem = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  outline: 0;
  margin: 0;
  transition: background-color 0.2s, opacity 0.2s;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  ${variant({
    prop: "scale",
    variants: slideMenuScaleVariants,
  })}
  ${variant({
    variants: slideMenuStyleVariants,
  })}
  ${layout}
  ${space}
`;

export default StyledSlideMenuItem;
