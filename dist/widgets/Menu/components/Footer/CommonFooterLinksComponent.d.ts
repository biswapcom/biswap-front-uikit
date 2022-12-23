import React from "react";
import { FooterLinks } from "../../types";
interface IProps extends FooterLinks {
    title: string;
}
declare const CommonFooterLinksComponent: React.FC<IProps>;
export default CommonFooterLinksComponent;
