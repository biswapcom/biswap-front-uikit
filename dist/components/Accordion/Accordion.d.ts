import React, { FC, ReactNode } from "react";
interface IProps {
    heading: (s?: boolean) => ReactNode;
    children: ReactNode;
    label?: string;
    clickable?: boolean;
    index: number;
    href?: string;
    linkComponent?: React.ElementType;
    isOpenItem?: boolean;
    setIsOpenMenu: (arg: boolean) => void;
}
declare const Accordion: FC<IProps>;
export default Accordion;
