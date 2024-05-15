import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div.attrs({ p: "24px" })<CardBodyProps>`
  ${space}
`;

export default CardBody;
