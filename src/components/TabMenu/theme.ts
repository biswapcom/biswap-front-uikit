import { tabsScales, tabVariants } from "./types";

export const menuScaleVariants = {
  [tabsScales.LG]: {
    height: "40px",
    padding: "0 16px",
    fontSize: "14px",
    borderRadius: "8px",
  },
  [tabsScales.MD]: {
    height: "32px",
    padding: "0 12px",
    fontSize: "12px",
    borderRadius: "8px",
  },
  [tabsScales.SM]: {
    height: "24px",
    padding: "2px 8px",
    fontSize: "12px",
    borderRadius: "6px",
  },
};

export const menuStyleVariants = {
  [tabVariants.TAB]: {
    color: "white",

    ":hover:not(:disabled)": {
      color: "white",
    },
  },
  [tabVariants.TAB_LIGHT]: {
    color: "backgroundDark",

    ":hover:not(:disabled)": {
      color: "backgroundDark",
    },
  },
};
