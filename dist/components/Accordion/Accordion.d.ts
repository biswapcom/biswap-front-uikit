import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
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
    currentOpen: string | undefined;
    setCurrentOpen: Dispatch<SetStateAction<string | undefined>>;
}
declare const Accordion: FC<IProps>;
export default Accordion;
