import { ColorKey, HoverKey, Variant, variants } from "./types";

export const getColorKey = (variant: Variant): ColorKey => {
  switch (variant) {
    case variants.DARK:
      return "pastelBlue";
    case variants.LIGHT:
      return "gray900";
    case variants.WARNING_LIGHT:
      return "gray900";
    case variants.WARNING_DARK:
      return "pastelBlue";
  }
};
export const getHoverKey = (variant: Variant): HoverKey => {
  switch (variant) {
    case variants.DARK:
      return "white";
    case variants.LIGHT:
      return "dark800";
    case variants.WARNING_LIGHT:
      return "dark800";
    case variants.WARNING_DARK:
      return "white";
  }
};

export const getOffset = (offset: number, isFlat: boolean): number =>
  isFlat ? offset : offset + 4;
