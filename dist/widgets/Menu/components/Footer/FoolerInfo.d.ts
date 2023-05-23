import React from "react";
import { BSWPriceProps, FooterStatisticProps } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps {
    registerToken: () => void;
    buyBswHandler: () => void;
    baseAwsUrl: string;
    buyBswLabel: string;
}
declare const FooterInfo: React.FC<Props>;
export default FooterInfo;
