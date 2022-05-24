import {scales, variants} from "./types";

export const scaleVariants = {
    [scales.LG]: {
        borderRadius: "10px",
        height: "48px",
        fontSize: "16px",
        padding: "0 24px",
    },
    [scales.MD]: {
        borderRadius: "8px",
        height: "40px",
        fontSize: "14px",
        padding: "0 16px",
    },
    [scales.SM]: {
        borderRadius: "8px",
        height: "32px",
        fontSize: "12px",
        padding: "0 12px",
    },
}
export const styleVariants = {
    [variants.LIGHT]: {
        backgroundColor: "gray300",
        color: "dark800",

        "::placeholder": {
            color: "gray900",
        },
        ":hover:not(:disabled)": {
            borderColor: "gray500",
            backgroundColor: "transparent",
            color: "dark800",
        },
        ":focus:not(:disabled)": {
            borderColor: "primary",
            backgroundColor: "transparent",
            color: "dark800",
        },
        ":disabled": {
            backgroundColor: "gray200",
            color: "gray600",
            cursor: "not-allowed",
        }
    },
    [variants.DARK]: {
        backgroundColor: "dark500",
        color: "white",

        "::placeholder": {
            color: "pastelBlue",
        },
        ":hover:not(:disabled)": {
            borderColor: "dark300",
            backgroundColor: "transparent",
            color: "white",
        },
        ":focus:not(:disabled)": {
            borderColor: "primary",
            backgroundColor: "transparent",
            color: "white",
        },
        ":disabled": {
            backgroundColor: "dark600",
            color: "dark200",
            cursor: "not-allowed",
        }
    },
    [variants.TRANSPARENT]: {
        backgroundColor: "transparent",
        color: "dark800",

        "::placeholder": {
            color: "gray900",
        },
        ":hover:not(:disabled)": {
            borderColor: "transparent",
            backgroundColor: "transparent",
            color: "dark800",
        },
        ":focus:not(:disabled)": {
            borderColor: "transparent",
            backgroundColor: "transparent",
            color: "dark800",
        },
        ":disabled": {
            backgroundColor: "transparent",
            color: "gray600",
            cursor: "not-allowed",
        }
    },
}