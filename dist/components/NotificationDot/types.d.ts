/// <reference types="react" />
import { Colors } from "../../theme";
export interface NotificationDotProps {
    show?: boolean;
    color?: keyof Colors;
    children: React.ReactElement | React.ReactElement[];
}
export interface DotProps {
    show: boolean;
    color: keyof Colors;
}
