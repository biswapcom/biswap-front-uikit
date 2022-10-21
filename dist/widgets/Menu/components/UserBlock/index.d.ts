import React from "react";
interface Props {
    account?: string;
    logout: () => void;
    pendingTransactions?: number;
    recentTransaction: any;
    chainId: any;
    clearTransaction: any;
    isSwap?: boolean;
    transactionsForUIKit?: any;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
