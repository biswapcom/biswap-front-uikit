import React from "react";
import { BSWPriceProps, FooterStatisticProps } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps {
    registerToken: () => void;
    buyBswLink: string;
}
declare const FooterInfo: React.FC<Props>;
export default FooterInfo;
