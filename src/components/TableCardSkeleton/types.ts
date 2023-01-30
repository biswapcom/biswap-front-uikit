export const ViewMode = {
  TABLE: "table",
  CARD: "card",
} as const;

export type SkeletonMode = typeof ViewMode[keyof typeof ViewMode];
