import { LayoutProps, SpaceProps } from "styled-system";

export const animation = {
  WAVES: "waves",
  PULSE: "pulse",
} as const;

export const variants = {
  RECT: "rect",
  CIRCLE: "circle",
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Animation = typeof animation[keyof typeof animation];
export type Variant = typeof variants[keyof typeof variants];

export interface SkeletonProps extends SpaceProps, LayoutProps {
  animation?: Animation;
  variant?: Variant;
}
