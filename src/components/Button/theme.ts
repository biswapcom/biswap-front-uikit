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
  [variants.DANGER]: {
    backgroundColor: "secondary",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "secondaryHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "secondaryPress",
    },
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "successHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "successPress",
    },
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
  [variants.BOOST]: {
    backgroundColor: "boost",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "boostHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "boostPress",
    },
  },

  [variants.TERTIARY]: {
    backgroundColor: "btnTertiary",
    color: "primary",
    border: "1px solid transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "btnTertiary",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "primary",
    },
  },
  [variants.TERTIARY_OUT]: {
    color: "primary",
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "btnTertiaryOut",

    ":hover:not(:disabled)": {
      backgroundColor: "btnTertiaryOut",
      borderColor: "transparent",
    },
    ":active:not(:disabled)": {
      backgroundColor: "btnTertiaryOutPress",
      borderColor: "transparent",
    },
  },
  [variants.LIGHT_OUT]: {
    color: "white",
    border: "1px solid",
    borderColor: "btnLightOutBorder",
    backgroundColor: "transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "btnLightOutBgHover",
      borderColor: "transparent",
    },
    ":active:not(:disabled)": {
      backgroundColor: "btnLightOutBgPress",
      borderColor: "transparent",
    },
  },
  [variants.LIGHT]: {
    backgroundColor: "btnLight",
    color: "white",
    border: "1px solid transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "btnLight",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "white",
    },
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.SELECT]: {
    backgroundColor: "dropDown",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
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
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
    },
  },
};
