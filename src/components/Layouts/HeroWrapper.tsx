import React from "react";
import { Box, BoxProps } from "../Box";
import { getResponsiveAttrs } from "../../util";

const HeroWrapper: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      p={getResponsiveAttrs({ xs: "96px 0 0", md: "104px 0 0" })}
      width="100%"
      {...props}
    >
      {children}
    </Box>
  );
};

export default HeroWrapper;
