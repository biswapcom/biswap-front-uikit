import { FC } from "react";
import { BodyTextProps } from "./typesBodyText";
interface scalesMap {
    [x: string]: {
        fontSize: string;
        lineHeight: string;
    };
}
export declare const bodyTextScaleMap: scalesMap;
export declare const BodyText: FC<BodyTextProps>;
export {};
