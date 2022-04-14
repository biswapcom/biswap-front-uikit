import React from "react";
import {
  BSWPriceProps,
  FooterStatisticProps,
  FooterAboutLinks,
  FooterProductLinks,
  FooterServiceLinks
} from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks {
  onClick: () => void;
  buyBswLink: string;
}
declare const Footer: React.FC<Props>;
export default Footer;
