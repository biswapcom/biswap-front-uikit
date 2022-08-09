import { BoxProps } from "../Box";
export interface PercentSliderProps extends BoxProps {
    name?: string;
    min?: number;
    max?: number;
    value: number;
    onValueChanged: (newValue: number) => void;
    disabled?: boolean;
    enableShortcuts?: boolean;
    shortcutCheckpoints?: Array<number>;
    withTooltip?: boolean;
    bannerPosition?: "top" | "bottom";
    darkMode?: boolean;
}
