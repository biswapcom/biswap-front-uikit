import { FC } from "react";
import { SkeletonMode } from "./types";
interface IProps {
    viewMode?: SkeletonMode;
    number?: number;
    tableHeight?: string;
    cardHeight?: string;
}
declare const TableCardSkeleton: FC<IProps>;
export default TableCardSkeleton;
