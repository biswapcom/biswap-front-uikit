import { FC } from "react";
import { BoxProps } from "../Box";
import { QuestionProp } from "./types";
interface IProps extends BoxProps {
    title?: string;
    leftData: QuestionProp[];
    rightData: QuestionProp[];
}
declare const Faqs: FC<IProps>;
export default Faqs;
