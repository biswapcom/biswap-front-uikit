import { badgeTypes } from "./types";

export const BadgeTypesContainer = {
  [badgeTypes.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
    border: "0",

    ":hover": {
      backgroundColor: "successHover",
    },
    ":active, &.active": {
      backgroundColor: "successPress",
    },
  },
  [badgeTypes.ERROR]: {
    backgroundColor: "secondary",
    color: "white",
    border: "0",

    ":hover": {
      backgroundColor: "secondaryHover",
    },
    ":active, &.active": {
      backgroundColor: "secondaryPress",
    },
  },
  [badgeTypes.WARNING]: {
    backgroundColor: "warning",
    color: "dark800",
    border: "0",

    ":hover": {
      backgroundColor: "warningHover",
    },
    ":active, &.active": {
      backgroundColor: "warningPress",
    },
  },
  [badgeTypes.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
    border: "0",

    ":hover": {
      backgroundColor: "primaryHover",
    },
    ":active, &.active": {
      backgroundColor: "primaryPress",
    },
  },
  [badgeTypes.BOOST]: {
    backgroundColor: "boost",
    color: "white",
    border: "0",

    ":hover": {
      backgroundColor: "boostHover",
    },
    ":active, &.active": {
      backgroundColor: "boostPress",
    },
  },
  [badgeTypes.ACTIVE]: {
    backgroundColor: "successOpacity",
    color: "success",
    border: "1px solid transparent",

    ":hover": {
      backgroundColor: "transparent",
      borderColor: "successOpacity",
    },
    ":active, &.active": {
      backgroundColor: "transparent",
      borderColor: "success",
    },
  },
  [badgeTypes.NOT_ACTIVE]: {
    backgroundColor: "secondaryOpacity",
    color: "secondary",
    border: "1px solid transparent",

    ":hover": {
      backgroundColor: "transparent",
      borderColor: "secondaryOpacity",
    },
    ":active, &.active": {
      backgroundColor: "transparent",
      borderColor: "secondary",
    },
  },
  [badgeTypes.CORE]: {
    backgroundColor: "primaryOpacity",
    color: "primary",
    border: "1px solid transparent",

    ":hover": {
      backgroundColor: "transparent",
      borderColor: "primaryOpacity",
    },
    ":active, &.active": {
      backgroundColor: "transparent",
      borderColor: "primary",
    },
  },
  [badgeTypes.WARNING_OPACITY]: {
    backgroundColor: "warningOpacity",
    color: "warning",
    border: "1px solid transparent",

    ":hover": {
      backgroundColor: "transparent",
      borderColor: "warning",
    },
    ":active, &.active": {
      backgroundColor: "transparent",
      borderColor: "warning",
    },
  },
  [badgeTypes.LIGHT]: {
    backgroundColor: "gray200",
    color: "dark800",
    border: "0",

    ":hover": {
      backgroundColor: "white",
    },
    ":active, &.active": {
      backgroundColor: "gray400",
    },
  },
};
