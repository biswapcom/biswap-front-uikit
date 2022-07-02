import { BaseButtonProps } from "../Button";
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
declare const StyledSlideMenuItem: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, BaseButtonProps, never>;
export default StyledSlideMenuItem;
