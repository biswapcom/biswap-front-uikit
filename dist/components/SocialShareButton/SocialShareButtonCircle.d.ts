import { FC } from "react";
import { FlexboxProps } from "styled-system";
interface SocialShareButtonCircleProps extends FlexboxProps {
    social: string;
    label: string;
    link: string;
    message: string;
    color?: string;
    width?: string;
}
declare const SocialShareButtonCircle: FC<SocialShareButtonCircleProps>;
export default SocialShareButtonCircle;
