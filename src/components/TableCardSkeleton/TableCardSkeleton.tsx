import React, { FC } from "react";
import { Box } from "../Box";
import { Skeleton } from "../Skeleton";
import { SkeletonMode, ViewMode } from "./types";

interface IProps {
  viewMode?: SkeletonMode;
  number?: number;
  tableHeight?: string;
  cardHeight?: string;
}

const TableCardSkeleton: FC<IProps> = ({
  viewMode = ViewMode.CARD,
  number = 6,
  tableHeight = "72px",
  cardHeight = "352px",
}): JSX.Element => {
  if (viewMode === ViewMode.CARD) {
    return (
      <>
        {Array.from({ length: number }, (v, i) => i).map((item) => (
          <Box key={item.toString()} overflow="hidden" borderRadius="16px">
            <Skeleton animation="waves" height={cardHeight} width="100%" />
          </Box>
        ))}
      </>
    );
  }
  return (
    <Box overflow="hidden" borderRadius="16px">
      {Array.from({ length: number }, (v, i) => i).map((item) => (
        <Skeleton
          key={item.toString()}
          animation="waves"
          height={tableHeight}
          width="100%"
          my="2px"
        />
      ))}
    </Box>
  );
};

export default TableCardSkeleton;
