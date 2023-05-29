import { badgeTypes } from "./types";

export const BadgeTypesContainer = {
  [badgeTypes.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
    border: "0",
  },
  [badgeTypes.ERROR]: {
    backgroundColor: "secondary",
    color: "white",
    border: "0",
  },
  [badgeTypes.WARNING]: {
    backgroundColor: "warning",
    color: "dark800",
    border: "0",
  },
  [badgeTypes.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
    border: "0",
  },
  [badgeTypes.BOOST]: {
    backgroundColor: "boost",
    color: "white",
    border: "0",
  },
  [badgeTypes.ACTIVE]: {
    backgroundColor: "successOpacity",
    color: "success",
    border: "1px solid transparent",
  },
  [badgeTypes.NOT_ACTIVE]: {
    backgroundColor: "secondaryOpacity",
    color: "secondary",
    border: "1px solid transparent",
  },
  [badgeTypes.CORE]: {
    backgroundColor: "primaryOpacity",
    color: "primary",
    border: "1px solid transparent",
  },
  [badgeTypes.WARNING_OPACITY]: {
    backgroundColor: "warningOpacity",
    color: "warning",
    border: "1px solid transparent",
  },
  [badgeTypes.LIGHT]: {
    backgroundColor: "gray200",
    color: "dark800",
    border: "0",
  },
};
