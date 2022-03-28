import {DefaultTheme} from "styled-components";
import {Colors} from "../../theme";
import {StyledDropdownMenuInnerLinkItemProps, StyledDropdownMenuItemProps} from "./types";

export declare const InnerLinksBlockContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {
  padded: boolean;
}, never>;
export declare const DropdownMenuInnerLinkItem: import("styled-components").StyledComponent<"div", DefaultTheme, StyledDropdownMenuInnerLinkItemProps, never>;
export declare const DropdownMenuItem: import("styled-components").StyledComponent<"button", DefaultTheme, StyledDropdownMenuItemProps & {
  $isActive: boolean;
  $hasIcon?: boolean | undefined;
}, never>;
export declare const StyledDropdownMenuItemContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const DropdownMenuDivider: import("styled-components").StyledComponent<"hr", DefaultTheme, {}, never>;
export declare const StyledDropdownMenu: import("styled-components").StyledComponent<"div", DefaultTheme, {
  $isOpen: boolean;
  $isExtended?: boolean | undefined;
}, never>;
export declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Text").TextProps & {
  color: keyof Colors;
}, never>;
