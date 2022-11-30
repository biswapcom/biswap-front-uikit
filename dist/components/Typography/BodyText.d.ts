import { BodyTextProps } from "./typesBodyText";
import { FC } from "react";
interface scalesMap {
    [x: string]: {
        fontSize: string;
        lineHeight: string;
    };
}
export declare const bodyTextScaleMap: scalesMap;
export declare const BodyText: FC<BodyTextProps>;
export {};
