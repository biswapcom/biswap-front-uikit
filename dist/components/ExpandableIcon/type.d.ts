import { BoxProps } from "../Box";
export declare const variantRotate: {
    readonly ROTATE_V1: "transformV1";
    readonly ROTATE_V2: "transformV2";
};
export type Scale = typeof variantRotate[keyof typeof variantRotate];
export interface ExpandableIconProps extends BoxProps {
    isOpen: boolean;
    color?: string;
    width?: string;
    iconName: string;
    rotateType?: Scale;
}
