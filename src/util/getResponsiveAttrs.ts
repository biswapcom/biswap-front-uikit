import { ResponsiveValue } from "styled-system";

type PropType = any | null;

interface ResponsiveObj {
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

const getResponsiveAttrs = (obj: ResponsiveObj): ResponsiveValue<PropType> =>
  Object.values({ ...defaultObject, ...obj });

export default getResponsiveAttrs;
