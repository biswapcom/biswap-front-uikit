import React from "react";
import { Box, BoxProps } from "../Box";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box
    width="100%"
    px={["16px", null, null, "24px", null, null, 0]}
    mx="auto"
    maxWidth="1120px"
    {...props}
  >
    {children}
  </Box>
);

export default Container;
