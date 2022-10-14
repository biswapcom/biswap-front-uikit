export declare const variants: {
    LIGHT: string;
    DARK: string;
};
export declare type Variant = typeof variants[keyof typeof variants];
export declare type VariantProps = {
    variant: Variant;
};
export interface PaginationProps extends VariantProps {
    isLight?: boolean;
    pageCount: number;
    handlePageClick?: () => void;
    marginPagesDisplayed?: number;
    pageRangeDisplayed?: number;
}
