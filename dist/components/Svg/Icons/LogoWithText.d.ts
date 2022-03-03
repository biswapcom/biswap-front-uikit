import React from "react";
import { SvgProps } from "../types";
interface IProps extends SvgProps {
    isDark?: boolean;
}
declare const Icon: React.FC<IProps>;
export default Icon;
