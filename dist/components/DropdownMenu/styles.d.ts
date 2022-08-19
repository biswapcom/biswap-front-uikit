/// <reference types="react" />
import { DefaultTheme } from "styled-components";
import { LinkProps } from "react-router-dom";
import { Colors } from "../../theme";
import { StyledDropdownMenuInnerLinkItemProps, StyledDropdownMenuItemProps } from "./types";
export declare const InnerLinksBlockContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {
    padded: boolean;
}, never>;
export declare const DropdownMenuInnerLinkItem: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>, DefaultTheme, StyledDropdownMenuInnerLinkItemProps & LinkProps, never>;
export declare const DropdownMenuInnerOuterLinkItem: import("styled-components").StyledComponent<"a", DefaultTheme, StyledDropdownMenuInnerLinkItemProps, never>;
export declare const CommonLinkStyle: ({ disabled, $isActive, $hasIcon, label }: StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean | undefined;
    label?: string | React.ReactNode;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<DefaultTheme>>;
export declare const DropdownMenuItem: import("styled-components").StyledComponent<"button", DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean | undefined;
}, never>;
export declare const DropdownInternalMenuItem: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>, DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean | undefined;
    label?: string | React.ReactNode;
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
export declare const BannerPlacementItem: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
