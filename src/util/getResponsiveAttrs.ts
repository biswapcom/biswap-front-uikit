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

const defaultObject = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xll: null,
  xxl: null,
};

export type ResponsiveValueType = ResponsiveValue<PropType>;

export const getResponsiveAttrs = (obj: ResponsiveObj): ResponsiveValueType =>
  Object.values({ ...defaultObject, ...obj });
