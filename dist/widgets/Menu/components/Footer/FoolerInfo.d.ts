import React from "react";
import { BSWPriceProps, FooterStatisticProps } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps {
    onClick: () => void;
    buyBswHandler: () => void;
}
declare const FooterInfo: React.FC<Props>;
export default FooterInfo;
