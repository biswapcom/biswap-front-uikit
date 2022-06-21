import { tabsScales, tabVariants } from "./types";

export const menuScaleVariants = {
  [tabsScales.LG]: {
    height: "40px",
    padding: "0 16px",
    fontSize: "16px",
    lineHeight: "24px",
  },
  [tabsScales.MD]: {
    height: "32px",
    padding: "0 12px",
    fontSize: "14px",
    lineHeight: "20px",
  },
  [tabsScales.SM]: {
    height: "24px",
    padding: "0 8px",
    fontSize: "12px",
    lineHeight: "16px",
  },
};

export const sliderScaleVariant = {
  [tabsScales.LG]: {
    padding: "0 16px",
  },
  [tabsScales.MD]: {
    padding: "0 12px",
  },
  [tabsScales.SM]: {
    padding: "0 8px",
  },
};

export const menuStyleVariants = {
  [tabVariants.DARK]: {
    color: "white",

    ":hover:not(:disabled)": {
      color: "white",
    },
  },
  [tabVariants.LIGHT]: {
    color: "backgroundDark",

    ":hover:not(:disabled)": {
      color: "backgroundDark",
    },
  },
};

export const menuIconScaleVariants = {
  [tabsScales.LG]: {
    width: "24px",
    marginRight: "10px",
  },
  [tabsScales.MD]: {
    width: "20px",
    marginRight: "8px",
  },
  [tabsScales.SM]: {
    width: "16px",
    marginRight: "6px",
  },
};

