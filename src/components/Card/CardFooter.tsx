import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div.attrs({ p: "24px" })<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  ${space}
`;

export default CardFooter;
