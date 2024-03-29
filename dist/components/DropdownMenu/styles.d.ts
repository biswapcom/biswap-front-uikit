import React from "react";
import { DefaultTheme } from "styled-components";
import { Colors } from "../../theme";
import { StyledDropdownMenuInnerLinkItemProps, StyledDropdownMenuItemProps } from "./types";
export declare const InnerLinksBlockContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {
    padded: boolean;
}, never>;
export declare const DropdownMenuInnerLinkItem: import("styled-components").StyledComponent<"div", DefaultTheme, StyledDropdownMenuInnerLinkItemProps, never>;
export declare const DropdownMenuInnerOuterLinkItem: import("styled-components").StyledComponent<"a", DefaultTheme, StyledDropdownMenuInnerLinkItemProps, never>;
export declare const CommonLinkStyle: ({ disabled, $isActive, $hasIcon, label, }: StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean | undefined;
    label?: string | React.ReactNode;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<DefaultTheme>>;
export declare const DropdownMenuItem: import("styled-components").StyledComponent<"button", DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean | undefined;
}, never>;
export declare const DropdownInternalMenuItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("react-router-dom").LinkProps & React.RefAttributes<HTMLAnchorElement>>, DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean | undefined;
    label?: string | React.ReactNode;
}, never>;
export declare const StyledDropdownMenuItemContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isOpenMenuItem?: boolean | undefined;
    disabled?: boolean | undefined;
}, never>;
export declare const DropdownMenuDivider: import("styled-components").StyledComponent<"hr", DefaultTheme, {}, never>;
export declare const StyledDropdownMenu: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & import("../Box").GridProps & {
    $isOpen: boolean;
    $isExtended?: boolean | undefined;
}, never>;
export declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Text").TextProps & {
    color: keyof Colors;
}, never>;
export declare const BannerPlacementItem: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const BorderMobileMenuItem: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & {
    isHighlighted?: boolean | undefined;
}, never>;
