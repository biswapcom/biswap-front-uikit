import { FC, ReactNode } from "react";
import { Variant } from "../types";
interface IProps {
    name: string;
    isOpened: boolean;
    handleToggle: (value: string) => void;
    children: ReactNode;
    variant: Variant;
}
declare const FaqAccordion: FC<IProps>;
export default FaqAccordion;
