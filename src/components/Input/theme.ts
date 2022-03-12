import {scales, styleColor} from "./types";

export const scaleVariants = {
    [scales.LG]: {
        borderRadius: "10px",
        height: "48px",
        fontSize: "16px",
    },
    [scales.MD]: {
        borderRadius: "8px",
        height: "40px",
        fontSize: "14px",
    },
    [scales.SM]: {
        borderRadius: "8px",
        height: "32px",
        fontSize: "12px",
    },
}
export const styleVariants = {
    [styleColor.LIGHT]: {
        backgroundColor: "gray300",
        color: "gray900",

        "::placeholder": {
            color: "gray900",
        },
        ":hover:not(:disabled)": {
            borderColor: "gray900",
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
    [styleColor.DARK]: {
        backgroundColor: "dark500",
        color: "pastelBlue",

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
    }
}