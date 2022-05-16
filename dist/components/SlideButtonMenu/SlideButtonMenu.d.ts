import React from "react";
import { SlideButtonMenuProps } from "./types";
interface SlideMenuProps extends SlideButtonMenuProps {
    onItemClick: (index: number) => void;
}
declare const SlideButtonMenu: React.FC<SlideMenuProps>;
export default SlideButtonMenu;
