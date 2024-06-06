import { SCALES, VARIANTS } from "./types";

export const scaleVariantsContainer = {
  [SCALES.LG]: {
    height: "48px",
  },
  [SCALES.MD]: {
    height: "40px",
  },
  [SCALES.SM]: {
    height: "32px",
  },
};
export const scaleVariantsTop = {
  [SCALES.LG]: {
    padding: "0 12px 0 24px",
    fontSize: "16px",
    borderRadius: "10px",

    svg: {
      width: "24px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },

    ".arrow_primary": {
      marginLeft: "8px",
    },
  },
  [SCALES.MD]: {
    padding: "0 10px 0 16px",
    fontSize: "14px",
    borderRadius: "8px",

    svg: {
      width: "20px",
      marginRight: "6px",
    },
    img: {
      marginRight: "6px",
    },

    ".arrow_primary": {
      marginLeft: "6px",
    },
  },
  [SCALES.SM]: {
    padding: "0 8px 0 12px",
    fontSize: "12px",
    borderRadius: "8px",

    svg: {
      width: "16px",
      marginRight: "4px",
    },
    img: {
      marginRight: "4px",
    },

    ".arrow_primary": {
      marginLeft: "4px",
    },
  },
};

export const scaleVariantsContent = {
  [SCALES.LG]: {
    borderRadius: "10px",
  },
  [SCALES.MD]: {
    borderRadius: "8px",
  },
  [SCALES.SM]: {
    borderRadius: "8px",
  },
};

export const scaleVariantItem = {
  [SCALES.LG]: {
    height: "48px",
    fontSize: "16px",
    padding: "0 24px",

    svg: {
      width: "24px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },
  },
  [SCALES.MD]: {
    height: "40px",
    fontSize: "14px",
    padding: "0 10px 0 16px",

    svg: {
      width: "20px",
      marginRight: "6px",
    },
    img: {
      marginRight: "6px",
    },
  },
  [SCALES.SM]: {
    height: "32px",
    fontSize: "12px",
    padding: "0 8px 0 12px",

    svg: {
      width: "16px",
      marginRight: "4px",
    },
    img: {
      marginRight: "4px",
    },
  },
};

export const styleVariantsTop = {
  [VARIANTS.PRIMARY]: {
    color: "primary",

    ".arrow": {
      fill: "primary",
    },
  },
  [VARIANTS.SECONDARY]: {
    color: "gray900",

    ".arrow": {
      fill: "gray900",
    },
  },
  [VARIANTS.LIGHT]: {
    color: "white",

    ".arrow": {
      fill: "white",
    },
  },
  [VARIANTS.DARK]: {
    color: "dark800",

    ".arrow": {
      fill: "dark800",
    },
  },
};
