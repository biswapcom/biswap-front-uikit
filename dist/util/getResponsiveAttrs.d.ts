import { ResponsiveValue } from "styled-system";
type PropType = any | null;
export interface ResponsiveObj {
    xs?: PropType;
    sm?: PropType;
    md?: PropType;
    lg?: PropType;
    xl?: PropType;
    xll?: PropType;
    xxl?: PropType;
}
export type ResponsiveValueType = ResponsiveValue<PropType>;
export declare const getResponsiveAttrs: (obj: ResponsiveObj) => ResponsiveValueType;
export {};
