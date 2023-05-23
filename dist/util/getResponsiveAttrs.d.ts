import { ResponsiveValue } from "styled-system";
declare type PropType = any | null;
interface ResponsiveObj {
    xs?: PropType;
    sm?: PropType;
    md?: PropType;
    lg?: PropType;
    xl?: PropType;
    xll?: PropType;
    xxl?: PropType;
}
declare const getResponsiveAttrs: (obj: ResponsiveObj) => ResponsiveValue<PropType>;
export default getResponsiveAttrs;
