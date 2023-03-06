import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare type BadgeType = typeof badgeTypes[keyof typeof badgeTypes];
export interface BadgeButtonProps extends SpaceProps {
    fontSize?: string;
    fontWeight?: string;
    isIcon?: string;
    children: ReactNode;
    badgeType: BadgeType;
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
