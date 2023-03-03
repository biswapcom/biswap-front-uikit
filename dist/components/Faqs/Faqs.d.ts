import { FC } from "react";
import { BoxProps } from "../Box";
import { QuestionProp, Variant } from "./types";
interface IProps extends BoxProps {
    title?: string;
    leftData: QuestionProp[];
    rightData: QuestionProp[];
    variant?: Variant;
}
declare const Faqs: FC<IProps>;
export default Faqs;
