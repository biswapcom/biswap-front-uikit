import { FC } from "react";
interface Props {
    account?: string;
    logout: () => void;
    callback?: () => void;
    isSwap?: boolean;
    href?: string;
}
declare const BDayEvent: FC<Props>;
export default BDayEvent;
