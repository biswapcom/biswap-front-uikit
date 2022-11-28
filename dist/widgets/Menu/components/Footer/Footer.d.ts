import React from "react";
import { BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks {
    registerToken: () => void;
    buyBswHandler: () => void;
}
declare const Footer: React.FC<Props>;
export default Footer;
