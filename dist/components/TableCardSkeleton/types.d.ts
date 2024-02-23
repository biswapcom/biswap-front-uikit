export declare const ViewMode: {
    readonly TABLE: "table";
    readonly CARD: "card";
};
export type SkeletonMode = typeof ViewMode[keyof typeof ViewMode];
