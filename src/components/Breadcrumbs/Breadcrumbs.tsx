/* eslint-disable react/no-array-index-key */
import React, { Children, isValidElement, ReactNode } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import ChevronRightIcon from "../Svg/Icons/Arrows/ChevronRight";
import { BreadcrumbsProps } from "./types";

const Separator = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.gray900};
  display: flex;
  justify-content: center;
  padding: 0 4px;
`;

const StyledBreadcrumbs = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  ${space}
`;

const insertSeparators = (
  items: ReactNode[],
  separator: BreadcrumbsProps["separator"]
) =>
  items.reduce((accum: ReactNode[], item, index) => {
    if (index === 0) {
      return [...accum, item];
    }

    return [
      ...accum,
      <Separator aria-hidden key={`seperator-${index}`}>
        {separator}
      </Separator>,
      item,
    ];
  }, []);

const DefaultSeparator = <ChevronRightIcon color="dark500" width="20px" />;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = DefaultSeparator,
  children,
}) => {
  const validItems = Children.toArray(children).filter((child) =>
    isValidElement(child)
  );
  const items = insertSeparators(validItems, separator);

  return (
    <StyledBreadcrumbs>
      {items.map((item, index) => (
        <li key={`child-${index}`}>{item}</li>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
