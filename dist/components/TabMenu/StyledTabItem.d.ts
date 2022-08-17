import { DefaultTheme } from "styled-components";
import { TabBarItemProps } from "./types";
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
declare const StyledTabItem: import("styled-components").StyledComponent<"button", DefaultTheme, TabBarItemProps, never>;
export default StyledTabItem;
