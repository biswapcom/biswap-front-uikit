import { variants, scales } from "./types";

export const scaleVariants = {
  [scales.LG]: {
    fontSize: "16px",

    "svg" : {
      width: "16px"
    },
  },
  [scales.MD]: {
    fontSize: "14px",

    "svg" : {
      width: "14px"
    },
  },
  [scales.SM]: {
    fontSize: "12px",

    "svg" : {
      width: "12px"
    },
  },
}

export const styleVariants = {
  [variants.LIGHT]: {
    color: "primary",

    "svg" : {
      fill: "primary",
    },

    ":hover:not(:disabled)": {
      color: "primaryHover",

      "svg" : {
        fill: "primaryHover",
      },
    },
    ":active:not(:disabled)": {
      color: "primaryPress",

      "svg" : {
        fill: "primaryPress",
      },
    },
  },
  [variants.DARK]: {
    color: "primaryHover",

    "svg" : {
      fill: "primaryHover",
    },

    ":hover:not(:disabled)": {
      color: "primary",

      "svg" : {
        fill: "primary",
      },
    },
    ":active:not(:disabled)": {
      color: "primaryPress",

      "svg" : {
        fill: "primaryPress",
      },
    },
  },
}