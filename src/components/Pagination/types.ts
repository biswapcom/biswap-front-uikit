export const variants = {
  LIGHT: 'light',
  DARK: 'dark',
}

export type Variant = typeof variants[keyof typeof variants];

export type VariantProps = {
  variant: Variant
}
export interface PaginationProps extends VariantProps {
  isLight?: boolean
  pageCount: number
  handlePageClick?: () => void
  marginPagesDisplayed?: number
  pageRangeDisplayed?: number
}