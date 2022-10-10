import { variants, scales } from "./types";

export const scaleVariants = {
  [scales.XL]: {
    height: "48px",
    padding: "0 24px",
    borderRadius: "10px",
    fontSize: "16px",
  },
  [scales.LG]: {
    height: "40px",
    padding: "0 16px",
    fontSize: "14px",
    borderRadius: "8px",
  },
  [scales.MD]: {
    height: "32px",
    padding: "0 12px",
    fontSize: "12px",
    borderRadius: "8px",
  },
  [scales.SM]: {
    height: "24px",
    padding: "0 8px",
    fontSize: "12px",
    borderRadius: "6px",
  },
  [scales.XS]: {
    height: "20px",
    padding: "0 8px",
    fontSize: "12px",
    borderRadius: "6px",
  },
};

export const styleVariants = {
  [variants.DARK]: {
    color: "white",
    backgroundColor: "transparent",
    transition: "color .3s ease",

    ":active:not(:disabled)": {
      backgroundColor: "transparent",
    },
  },
  [variants.LIGHT]: {
    backgroundColor: "transparent",
    color: "dark800",
    transition: "color .3s ease",

    ":hover(:disabled)": {
      color: "dark800",
    },
    ":active:not(:disabled)": {
      color: "text",
    },
  },
  [variants.WARNING_DARK]: {
    backgroundColor: "transparent",
    color: "dark800",
    transition: "color .3s ease",

    ":hover(:disabled)": {
      color: "dark800",
    },
    ":active:not(:disabled)": {
      color: "dark800",
    },
    ":active": {
      backgroundColor: "transparent",
    },
  },
  [variants.WARNING_LIGHT]: {
    backgroundColor: "transparent",
    color: "dark800",

    ":hover(:disabled)": {
      color: "dark800",
    },
    ":active:not(:disabled)": {
      color: "dark800",
    },
  },
};
