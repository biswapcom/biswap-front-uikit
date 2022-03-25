import React from "react";
import { Box } from "../Box";
import styled from "styled-components";

const Divider = styled(Box)`
  opacity: 0.16;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

const MenuItemDivider = () => <Divider width={0} height={20} />;

export default MenuItemDivider;
