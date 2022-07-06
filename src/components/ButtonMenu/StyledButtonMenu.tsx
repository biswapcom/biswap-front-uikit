import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "./types";
import getRgba from "../../util/getRgba";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return variant === variants.SELECT
    ? theme.colors.tooltip
    : getRgba(theme.colors.pastelBlue, 0.08);
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  background-color: ${getBackgroundColor};
  border-radius: 8px;
  display: inline-flex;
  padding: 4px;
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
