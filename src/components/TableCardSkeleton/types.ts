export const ViewMode = {
  TABLE: "TABLE",
  CARD: "CARD",
};

export type SkeletonMode = typeof ViewMode[keyof typeof ViewMode];
