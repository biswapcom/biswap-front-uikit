import React, { FC, PropsWithChildren } from "react";
declare type State = {
    [key: string]: boolean;
};
declare type BreakpointChecks = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
} & State;
export declare const MatchBreakpointsContext: React.Context<BreakpointChecks>;
export declare const getBreakpointChecks: (state: State) => BreakpointChecks;
export declare const MatchBreakpointsProvider: FC<PropsWithChildren>;
export {};
