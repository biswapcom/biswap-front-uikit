import { FC } from "react";
import { BoxProps } from "../Box";
interface IProps extends BoxProps {
    title?: string;
    revised: string;
    scrollClass?: string;
    description: string;
    termsList: Array<string | JSX.Element>;
    imageSize?: string;
    imageColor?: string;
}
export declare const StyledList: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BoxProps, never>;
export declare const StyledListItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BoxProps & import("../Box").FlexProps, never>;
declare const Terms: FC<IProps>;
export default Terms;
