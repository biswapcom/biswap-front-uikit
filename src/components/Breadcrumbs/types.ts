import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export interface BreadcrumbsProps extends SpaceProps {
  separator?: ReactNode;
  children: ReactNode;
}
