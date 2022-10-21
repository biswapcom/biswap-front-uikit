export declare const tags: {
    P: string;
    SPAN: string;
    DIV: string;
};
export declare const scales: {
    readonly SIZE20: "size20";
    readonly SIZE16: "size16";
    readonly SIZE14: "size14";
    readonly SIZE12: "size12";
};
export declare type Tags = typeof tags[keyof typeof tags];
export declare type Scales = typeof scales[keyof typeof scales];
export interface BodyTextProps {
    as?: Tags;
    scale?: Scales;
    nowrap?: boolean;
}
