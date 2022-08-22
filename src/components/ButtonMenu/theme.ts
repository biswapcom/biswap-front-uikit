import { variants, scales } from "./types";

export const scaleVariants = {
  [scales.XL]: {
    height: "48px",
    padding: "0 24px",
    borderRadius: "10px",
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
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "primaryHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "primaryPress",
    },
    // ":disabled": {
    //   backgroundColor: "primaryPress",
    //   color: "white"
    // },
  },
  [variants.WARNING]: {
    backgroundColor: "warning",
    color: "dark800",

    ":hover:not(:disabled)": {
      backgroundColor: "warningHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "warningPress",
    },
  },
  [variants.SELECT]: {
    backgroundColor: "dark500",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "dark500",
      color: "white",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
    },
  },
  [variants.SELECT_LIGHT]: {
    backgroundColor: "white",
    color: "background",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
      color: "background",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
    },
  },
};
