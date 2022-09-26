export declare const tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    H6: string;
    P: string;
    SPAN: string;
    DIV: string;
};
export declare const scales: {
    readonly SIZE40: "size40";
    readonly SIZE32: "size32";
    readonly SIZE24: "size24";
    readonly SIZE20: "size20";
    readonly SIZE16: "size16";
    readonly SIZE14: "size14";
    readonly SIZE12: "size12";
    readonly SIZE10: "size10";
};
export declare type Tags = typeof tags[keyof typeof tags];
export declare type Scales = typeof scales[keyof typeof scales];
export interface HeadTextProps {
    as?: Tags;
    scale?: Scales;
}
