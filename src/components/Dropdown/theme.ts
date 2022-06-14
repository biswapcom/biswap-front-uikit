import { scales, variants } from "./types";

export const scaleVariantsTop = {
  [scales.LG]: {
    height: "48px",
    padding: "0 12px 0 24px",
    fontSize: "16px",
    borderRadius: "10px",

    svg: {
      width: "24px",
      marginRight: "12px",
    },
  },
  [scales.MD]: {
    height: "40px",
    padding: "0 10px 0 16px",
    fontSize: "14px",
    borderRadius: "8px",

    svg: {
      width: "20px",
      marginRight: "8px",
    },
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 8px 0 12px",
    fontSize: "12px",
    borderRadius: "8px",

    svg: {
      width: "16px",
      marginRight: "8px",
    },
  },
};

export const scaleVariantsContent = {
  [scales.LG]: {
    borderRadius: "10px",
  },
  [scales.MD]: {
    borderRadius: "8px",
  },
  [scales.SM]: {
    borderRadius: "8px",
  },
};

export const scaleVariantItem = {
  [scales.LG]: {
    height: '48px',
    fontSize: '16px',
    padding: '0 24px',

    svg: {
      width: "24px",
      marginRight: "12px",
    },
  },
  [scales.MD]: {
    height: '40px',
    fontSize: '14px',
    padding: '0 16px',

    svg: {
      width: "20px",
      marginRight: "8px",
    },
  },
  [scales.SM]: {
    height: '32px',
    fontSize: '12px',
    padding: '0 12px',

    svg: {
      width: "16px",
      marginRight: "8px",
    },
  }
}

export const styleVariantsTop = {
  [variants.LIGHT]: {
    borderColor: "gray300",
    color: "dark800",

    ".arrow": {
      fill: 'gray900'
    },
    ":hover": {
      color: "dark800",
      borderColor: "gray500",
    },
    "&.open": {
      color: "dark800",
      borderColor: "primary",

      ":hover": {
        color: 'dark800',
        borderColor: 'primary'
      },

      ".arrow": {
        fill: 'primary'
      },
    },
    "&.disabled": {
      color: "gray600",
      borderColor: "gray200",

      ":hover": {
        color: 'gray600',
        borderColor: 'gray200'
      },
      '.arrow': {
        fill: 'gray600'
      }
    },
  },
  [variants.DARK]: {
    borderColor: "dark500",
    color: "white",

    ".arrow": {
      fill: 'pastelBlue'
    },
    ":hover": {
      color: "white",
      borderColor: "dark300"
    },
    "&.open": {
      color: "white",
      borderColor: "primary",

      ":hover": {
        color: 'white',
        borderColor: 'primary'
      },
      ".arrow": {
        fill: 'primary'
      },
    },
    "&.disabled": {
      color: "dark200",
      borderColor: "dark600",

      ":hover": {
        color: 'dark200',
        borderColor: 'dark600'
      },
      '.arrow': {
        fill: 'dark200'
      }
    },
  },
};
