import React, { FC } from "react";
import { variant } from "styled-system";
import styled from "styled-components";

//Plugins
import ReactPaginate from "react-paginate";
import classNames from 'classnames'

//types
import {PaginationProps, VariantProps} from "./types";

//theme
import { Variants, VariantsArrows } from "./theme";

//icons
import {ChevronLeftIcon, ChevronRightIcon} from "../Svg";

const PaginationWrap = styled.div<VariantProps>`
  display: flex;
  justify-content: center;

  .paginate-wrapper {
    display: flex;
    justify-content: center;
  }

  .pagination {
    display: flex;

    li {
      border-radius: 8px;
      font-size: 14px;
      list-style-type: none;
      width: 40px;
      height: 40px;
      border: 0;
      outline: 0;
      line-height: 20px;
      font-weight: 600;
      transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

      ${variant({
        variants: Variants,
      })}
      
      &:hover {
        &:not(:first-child, :last-child, .active) {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }

      &.active {
        color: ${({ theme }) => theme.colors.contrast};
        background: ${({ theme }) => theme.colors.primary};

        &:hover {
          background: lighten(${({ theme }) => theme.colors.primary}, 5%);
        }
      }

      &:first-child,
      :last-child {
        background-color: ${({ theme }) => theme.colors.dark800};

        &:hover {
          background-color: #46465f;
        }
      }

      &.previous,
      &.next {
        background-color: transparent;
        transition: all .4s ease-in-out;

        ${variant({
          variants: VariantsArrows,
        })}
      }

      &.previous {
        margin-right: 24px;
      }
      &.next {
        margin-left: 24px;
      }

      &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.32;
      }
    }

    a {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;

      &:focus {
        outline: none;
      }
    }
  }
`

const Pagination:FC<PaginationProps> = (
  {
    variant,
    isLight,
    pageCount,
    handlePageClick,
    marginPagesDisplayed = 1,
    pageRangeDisplayed = 3,
  }
  ) => {

  const paginationClass = classNames('paginate-wrapper', { paginate__light: isLight, paginate__dark: !isLight })

  return (
    <PaginationWrap className={paginationClass} variant={variant}>
      <ReactPaginate
        previousLabel={<ChevronLeftIcon color={variant === 'light' ? 'primary' : 'white'} />}
        nextLabel={<ChevronRightIcon color={variant === 'light' ? 'primary' : 'white'} />}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationWrap>
  )
}

export default Pagination;