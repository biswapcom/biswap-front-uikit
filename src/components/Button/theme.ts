import { scales, variants } from "./types";

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
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "secondary",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
