import { FlexProps } from "styled-system";
import { ReactNode, ReactElement } from "react";
export declare const variants: {
    readonly DEFAULT: "default";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly PENDING: "pending";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface UserMenuProps extends FlexProps {
    account?: string;
    text?: ReactNode;
    avatarSrc?: string;
    variant?: Variant;
    disabled?: boolean;
    children?: (exposedProps: {
        isOpen: boolean;
    }) => ReactElement;
}
export interface UserMenuItemProps {
    disabled?: boolean;
}
