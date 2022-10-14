import { variants } from "./types";

export const Variants = {
  [variants.LIGHT]: {
    color: "primary",

    ":hover": {
      color: "white",
    },
  },
  [variants.DARK]: {
    color: "white",
  },
};

export const VariantsArrows = {
  [variants.LIGHT]: {
    border: "1px solid rgba(18, 99, 241, 0.16)",
    color: "primary",

    ":hover": {
      backgroundColor: "rgba(18, 99, 241, 0.16)",
      borderColor: "transparent",
    },
  },
  [variants.DARK]: {
    border: "1px solid rgba(255, 255, 255, 0.24)",
    color: "white",

    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.24)",
      borderColor: "transparent",
    },
  },
};
