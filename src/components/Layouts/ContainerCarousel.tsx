import React, { FC } from "react";
import { Box, BoxProps } from "../Box";
import { getResponsiveAttrs } from "../../util";

const ContainerCarousel: FC<BoxProps> = ({
  children,
  ...props
}): JSX.Element => (
  <Box
    px={getResponsiveAttrs({ xs: 0, sm: 0, md: "16px", lg: "24px", xxl: "0" })}
    mx="auto"
    maxWidth="1120px"
    {...props}
  >
    {children}
  </Box>
);

export default ContainerCarousel;
