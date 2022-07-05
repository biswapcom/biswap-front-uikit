import { variants } from "./types";

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
