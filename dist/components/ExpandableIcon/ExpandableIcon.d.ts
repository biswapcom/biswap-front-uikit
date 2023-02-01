import { FC } from "react";
import { BoxProps } from "../Box";
interface ExpandableIconProps extends BoxProps {
    isOpen: boolean;
    color?: string;
    width?: string;
    iconName: string;
}
declare const ExpandableIcon: FC<ExpandableIconProps>;
export default ExpandableIcon;
