declare const useMatchBreakpoints: () => {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
} & {
    [key: string]: boolean;
};
export default useMatchBreakpoints;
