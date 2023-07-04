import { LayoutProps, SpaceProps } from "styled-system";
export declare const animation: {
    readonly WAVES: "waves";
    readonly PULSE: "pulse";
};
export declare const variants: {
    readonly RECT: "rect";
    readonly CIRCLE: "circle";
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare type Animation = typeof animation[keyof typeof animation];
export declare type Variant = typeof variants[keyof typeof variants];
export interface SkeletonProps extends SpaceProps, LayoutProps {
    animation?: Animation;
    variant?: Variant;
}
