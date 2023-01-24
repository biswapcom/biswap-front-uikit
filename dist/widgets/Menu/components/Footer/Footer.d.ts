import React from "react";
import { BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks, FooterSocialLinks } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterSocialLinks, FooterServiceLinks {
    registerToken: () => void;
    buyBswHandler: () => void;
}
declare const Footer: React.FC<Props>;
export default Footer;
