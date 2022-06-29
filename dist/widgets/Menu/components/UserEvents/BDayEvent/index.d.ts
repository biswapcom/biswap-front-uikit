import { FC } from "react";
import { Login } from "../../../../WalletModal";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    callback?: () => void;
    isSwap?: boolean;
    href?: string;
}
declare const BDayEvent: FC<Props>;
export default BDayEvent;
