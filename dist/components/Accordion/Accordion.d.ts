import { FC, ReactNode } from "react";
interface IProps {
    heading: (s?: boolean) => ReactNode;
    children: ReactNode;
    label?: string;
    clickable?: boolean;
    index: number;
}
declare const Accordion: FC<IProps>;
export default Accordion;
