import React from "react";
import { TabBarProps } from "./types";
interface BarProps extends TabBarProps {
    onItemClick: (index: number) => void;
}
declare const TabMenu: React.FC<BarProps>;
export default TabMenu;
