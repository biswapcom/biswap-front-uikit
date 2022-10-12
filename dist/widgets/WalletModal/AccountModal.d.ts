import React from "react";
interface Props {
    account: string;
    logout: () => void;
    login: () => void;
    onDismiss?: () => void;
    recentTransaction?: any;
    rowStatus?: any;
    chainId?: any;
    clearTransaction?: () => void;
    isSwap?: boolean;
    transactionsForUIKit?: () => JSX.Element;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
