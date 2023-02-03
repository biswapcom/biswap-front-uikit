import styled from "styled-components";
import { Box } from "../Box";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
`;

export const AutoColumn = styled(Box)<{
  gap?: "sm" | "md" | "lg" | string;
  justify?:
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between";
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) =>
    (gap === "sm" && "8px") ||
    (gap === "md" && "16px") ||
    (gap === "lg" && "24px") ||
    gap};
  justify-items: ${({ justify }) => justify};
`;

export const ScrollColumn = styled(Column)`
  & ::-webkit-scrollbar-track {
    box-shadow: none;
  }

  & ::-webkit-scrollbar {
    width: 4px;
    background: rgba(116, 155, 216, 0.16);
    border-radius: 16px;
  }

  & ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: rgba(116, 155, 216, 0.24);
  }
`;

export default Column;
