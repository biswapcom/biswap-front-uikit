import {slideMenuScales, slideMenuVariants} from "./types";

export const slideMenuScaleVariants = {
    [slideMenuScales.LG]: {
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
        borderRadius: "8px",
    },
    [slideMenuScales.MD]: {
        height: "32px",
        padding: "0 12px",
        fontSize: "12px",
        borderRadius: "8px",
    },
    [slideMenuScales.SM]: {
        height: "24px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
};

export const slideMenuStyleVariants = {
    [slideMenuVariants.PRIMARY]: {
        backgroundColor: "primary",
        color: "white",

        ":hover:not(:disabled)": {
            backgroundColor: "primaryHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "primaryPress",
        },
    },
    [slideMenuVariants.WARNING]: {
        backgroundColor: "warning",
        color: "dark800",

        ":hover:not(:disabled)": {
            backgroundColor: "warningHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "warningPress",
        },
    },
    [slideMenuVariants.SELECT]: {
        color: "white",
        backgroundColor: "transparent",
        transition: 'color .3s ease',

        ":hover:not(:disabled)": {
            color: 'white'
        },
        ":active:not(:disabled)": {
            backgroundColor: "transparent",
        },
    },
    [slideMenuVariants.SELECT_LIGHT]: {
        backgroundColor: "transparent",
        color: "background",
        transition: 'color 1s ease',

        ":hover:not(:disabled)": {
            color: 'background'
        },
        ":active:not(:disabled)": {
            color: 'text'
        },
    },
};
