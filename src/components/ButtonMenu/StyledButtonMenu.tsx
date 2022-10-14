import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "./types";
import getRgba from "../../util/getRgba";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return variant === variants.DARK
    ? theme.colors.tooltip
    : getRgba(theme.colors.pastelBlue, theme, 0.08);
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  background-color: ${getBackgroundColor};
  border-radius: 8px;
  display: inline-flex;
  padding: 4px;
`;

export default StyledButtonMenu;
