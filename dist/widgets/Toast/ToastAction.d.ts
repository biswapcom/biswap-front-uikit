import React from "react";
interface ToastActionProps {
    title?: string;
    url?: string;
    telegramDescription: string;
    tweeterDescription: string;
    thx?: string;
    withGift?: boolean;
}
declare const ToastAction: React.FC<ToastActionProps>;
export default ToastAction;
