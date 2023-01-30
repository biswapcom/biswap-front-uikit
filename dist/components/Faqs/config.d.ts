/// <reference types="react" />
export declare const Config: {
    title: string;
    questions: ({
        name: string;
        description: string;
    } | {
        name: string;
        description: JSX.Element;
    })[];
};
