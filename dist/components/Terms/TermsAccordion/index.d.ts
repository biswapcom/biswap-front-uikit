import { FC, ReactNode } from "react";
interface IProps {
    name: string;
    imageSize: string;
    imageColor: string;
    children: ReactNode;
}
declare const TermsAccordion: FC<IProps>;
export default TermsAccordion;
