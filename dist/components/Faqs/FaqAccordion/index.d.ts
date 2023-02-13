import { FC, ReactNode } from "react";
interface IProps {
    name: string;
    isOpened: boolean;
    handleToggle: (value: string) => void;
    children: ReactNode;
}
declare const FaqAccordion: FC<IProps>;
export default FaqAccordion;
