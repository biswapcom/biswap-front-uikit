import { SpaceProps } from "styled-system";
import { CardTheme } from "./types";
export interface CardHeaderProps extends SpaceProps {
    variant?: keyof CardTheme["cardHeaderBackground"];
}
declare const CardHeader: any;
export default CardHeader;
