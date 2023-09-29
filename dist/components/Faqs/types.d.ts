/// <reference types="react" />
export interface QuestionProp {
    name: string;
    description: string | JSX.Element;
}
export declare const variants: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
    readonly DARK_BACKGROUND: "darkBackground";
};
export declare type Variant = typeof variants[keyof typeof variants];
