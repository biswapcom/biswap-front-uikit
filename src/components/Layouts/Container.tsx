import React from "react";
import { Box, BoxProps } from "../Box";
import { getResponsiveAttrs } from "../../util";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    width="100%"
    px={getResponsiveAttrs({ xs: "16px", lg: "24px", xxl: 0 })}
    mx="auto"
    maxWidth="1120px"
    {...props}
  >
    {children}
  </Box>
);

export default Container;
