import React, { FC } from "react";
import { TriggerType } from "../../hooks/useTooltip";
import { BoxProps } from "../Box";
import { Placement } from "@popperjs/core";
interface IconProps {
    color?: string;
    size?: string;
}
interface Props extends BoxProps {
    text: string | React.ReactNode;
    placement?: Placement;
    trigger?: TriggerType;
    size?: string;
    Icon?: FC<IconProps>;
    children?: React.ReactNode;
}
declare const TooltipHelper: React.FC<Props>;
export default TooltipHelper;
