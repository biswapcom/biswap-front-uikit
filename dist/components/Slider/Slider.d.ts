import React from "react";
import { BoxProps } from "../Box";
interface SliderProps extends BoxProps {
    value: number;
    onValueChanged: (newValue: number) => void;
    valueLabel?: string;
    checkPoints?: Checkpoint[];
    isRobiBoost?: boolean;
    bannerPosition?: "top" | "bottom";
    darkMode?: boolean;
}
interface Checkpoint {
    value: number;
    RB: string;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
