import { SpaceProps } from "styled-system";
import { ReactNode } from "react";
export interface BreadcrumbsProps extends SpaceProps {
    separator?: ReactNode;
    children: ReactNode;
}
