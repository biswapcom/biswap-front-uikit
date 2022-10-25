/// <reference types="react" />
export declare const StyledText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Text").TextProps, never>;
export declare const WalletCardsWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ScrollWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps, never>;
export declare const StyledButton: import("styled-components").StyledComponent<{
    <E extends import("react").ElementType<any> = "button">(props: import("../..").ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ConnectWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
