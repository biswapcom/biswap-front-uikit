import { BoxProps } from "../Box";

export const variantRotate = {
  ROTATE_V1: "transformV1",
  ROTATE_V2: "transformV2",
} as const;

export type Scale = typeof variantRotate[keyof typeof variantRotate];

export interface ExpandableIconProps extends BoxProps {
  isOpen: boolean;
  color?: string;
  width?: string;
  iconName: string;
  rotateType?: Scale;
}
