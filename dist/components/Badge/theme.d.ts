export declare const BadgeTypesContainer: {
    [x: string]: {
        backgroundColor: string;
        color: string;
        border: string;
        ":hover": {
            backgroundColor: string;
            borderColor?: undefined;
        };
        ":active, &.active": {
            backgroundColor: string;
            borderColor?: undefined;
        };
    } | {
        backgroundColor: string;
        color: string;
        border: string;
        ":hover": {
            backgroundColor: string;
            borderColor: string;
        };
        ":active, &.active": {
            backgroundColor: string;
            borderColor: string;
        };
    };
};
