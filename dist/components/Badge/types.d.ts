import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export interface BadgeProps extends SpaceProps {
    badgeType: "success" | "error" | "active" | "notActive" | "primary" | "warning" | "core" | "light" | "warningOpacity" | string;
    fontSize?: string;
    fontWeight?: string;
    isIcon?: string;
    isLarge?: boolean;
    children: ReactNode;
}
export declare const badgeTypes: {
    SUCCESS: string;
    ERROR: string;
    ACTIVE: string;
    NOT_ACTIVE: string;
    PRIMARY: string;
    WARNING: string;
    CORE: string;
    LIGHT: string;
    BOOST: string;
    WARNING_OPACITY: string;
};
