import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    onDismiss?: () => void;
    displayCount?: number;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
